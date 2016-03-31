import {GroupRow} from '../../static/models/grouprow';
import {Filter} from '../../static/models/filter';
import {DefaultLocation} from './defaults';

describe("GroupRow", () => {

    var groupRow: GroupRow;

    beforeEach(() => {
        var filter = new Filter(DefaultLocation);
        filter.group_field = "url";
        groupRow = new GroupRow({
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
            }}, filter);
    });

    it('has valid links', () => {
        expect(groupRow.link).toBe("#/groups?selection_count_order=false&selection_order_name=percentiles_duration.95&" +
        "selection_order_value=false&annotations=url+%3D%3D+front-%3Ebackend&group_field=url&" +
        "aggr_field=cd&next_chains_level=0&page=0&date_from=2016-03-24T02%3A37%3A14.944Z&date_to=2016-03-24T03%3A25%3A45.724Z");
        expect(groupRow.traces_link).toBe("#/traces?selection_count_order=false&selection_order_name=percentiles_duration.95&" +
        "selection_order_value=false&annotations=url+%3D%3D+front-%3Ebackend&group_field=url&" +
        "aggr_field=cd&next_chains_level=0&page=0&date_from=2016-03-24T02%3A37%3A14.944Z&date_to=2016-03-24T03%3A25%3A45.724Z");
    });
});