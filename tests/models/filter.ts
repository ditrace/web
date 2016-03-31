import {Filter} from '../../static/models/filter';
import {DefaultLocation} from './defaults';

describe("Filter", () => {

    var filter: Filter;

    beforeEach(() => {
        filter = new Filter(DefaultLocation);
    });

    it('trace conditions', () => {
        const cond = filter.get_trace_conditions();
        expect(cond.date.from).toBe("2016-03-24T02:37:14.944Z");
        expect(cond.date.to).toBe("2016-03-24T03:25:45.724Z");
    });

    it('get default order', () => {
        const order = filter.get_order();
        expect(order[0]["percentiles_duration.95"]).toBe("desc");
        expect(order[1]["_count"]).toBe("asc");
    });

    it('get asc order', () => {
        filter.selection_order_name = "percentiles_duration.75";
        filter.selection_order_value = true;
        const order = filter.get_order();
        expect(order[0]["percentiles_duration.75"]).toBe("asc");
        expect(order[1]["_count"]).toBe("asc");
    });

    describe('add term annotation', () => {
        beforeEach(() => {
            filter.add_annotation('terms', 'targetid', 'service');
        });

        it('annotations and conditions are correct', () => {
            expect(filter.annotations).toBe('targetid == service');
            expect(filter.get_span_conditions().terms['targetid']).toBe('service');
        });

    });

    describe('add range_inc annotation', () => {
        beforeEach(() => {
            filter.add_annotation('range_inc', 'rc', { from: 400, to: 499 });
        });

        it('annotations and conditions are correct', () => {
            expect(filter.annotations).toBe('rc >= 400 && rc <= 499');
            expect(filter.get_span_conditions().range_inc['rc'].from).toBe('400');
            expect(filter.get_span_conditions().range_inc['rc'].to).toBe('499');
        });
    });

    describe('add range_ex annotation', () => {
        beforeEach(() => {
            filter.add_annotation('range_ex', 'rc', { from: 400, to: 499 });
        });

        it('annotations and conditions are correct', () => {
            expect(filter.annotations).toBe('rc > 400 && rc < 499');
            expect(filter.get_span_conditions().range_ex['rc'].from).toBe('400');
            expect(filter.get_span_conditions().range_ex['rc'].to).toBe('499');
        });
    });

    describe('indices', () => {
        it('returns one index for one day interval', () => {
            filter.date_from = '2016-03-24T00:00:00.000Z';
            filter.date_to = '2016-03-24T01:00:00.000Z';
            expect(filter.get_indices()).toEqual(['traces-2016.03.24']);
        });

        it('returns two index for cross day short interval', () => {
            filter.date_from = '2016-03-23T23:00:00.000Z';
            filter.date_to = '2016-03-24T01:00:00.000Z';
            expect(filter.get_indices()).toEqual(['traces-2016.03.23', 'traces-2016.03.24']);
        });

        it('returns two index for cross day long interval', () => {
            filter.date_from = '2016-03-23T00:00:00.000Z';
            filter.date_to = '2016-03-24T23:00:00.000Z';
            expect(filter.get_indices()).toEqual(['traces-2016.03.23', 'traces-2016.03.24']);
        });
    });
});