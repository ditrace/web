import {ChainRow} from '../../static/models/chainrow';
import {Filter} from '../../static/models/filter';
import {DefaultLocation} from './defaults';

describe("ChainRow", () => {

    var chainRow: ChainRow;

    beforeEach(() => {
        chainRow = new ChainRow({
            key:"front->backend",
            doc_count:2,
            min_duration:{value:656682},
            max_duration:{value:734356},
            percentiles_duration:
            {
                values:{
                    "25.0":676100.5,
                    "50.0":695519,
                    "75.0":714937.5,
                    "95.0":730472.2999999999,
                    "99.0":733579.2599999999
                }
            }}, 1, "front", new Filter(DefaultLocation));
    });

    it('has valid links', () => {
        expect(chainRow.link).toBe("#/chains?selection_count_order=false&selection_order_name=percentiles_duration.95&selection_order_value=false&aggr_field=cd&next_chains_level=2&page=0&date_from=2016-03-24T02%3A37%3A14.944Z&date_to=2016-03-24T03%3A25%3A45.724Z&cur_chain_prefix=front&cur_chain_path=front-%3Ebackend&next_chains_prefix=front-%3Efront-%3Ebackend");
        expect(chainRow.traces_link).toBe("#/traces?selection_count_order=false&selection_order_name=percentiles_duration.95&selection_order_value=false&aggr_field=cd&next_chains_level=2&page=0&date_from=2016-03-24T02%3A37%3A14.944Z&date_to=2016-03-24T03%3A25%3A45.724Z&cur_chain_prefix=front&cur_chain_path=front-%3Ebackend&next_chains_prefix=front-%3Efront-%3Ebackend");
    });

});