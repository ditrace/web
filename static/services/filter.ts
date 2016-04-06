import {Filter} from '../models/filter';

export class FilterService {
    order = {
        count: { name: '_count', desc: true },
        min: { name: 'min_duration', desc: true },
        max: { name: 'max_duration', desc: true },
        p25: { name: 'percentiles_duration.25', desc: true },
        p50: { name: 'percentiles_duration.50', desc: true },
        p75: { name: 'percentiles_duration.75', desc: true },
        p95: { name: 'percentiles_duration.95', desc: true },
        p99: { name: 'percentiles_duration.99', desc: true },
    }

    state: Filter;
    
    constructor(private $location: ng.ILocationService, private $cookies: ng.cookies.ICookiesService) {
        this.refresh();
    }
    
    static $inject = ["$location", "$cookies"];

    refresh(): Filter {
        var params = this.$location.search();
        this.state = new Filter(this.$location.search(), this.$cookies.get('dtrace_system'));
        return this.state;
    }

    set_location() {
        const cur_state = this.state.get();
        const location_state = this.$location.search();
        if(!angular.equals(cur_state, location_state))
            this.$location.search(cur_state);
    }

    clear(){
        this.$location.search({});
        this.refresh();
        this.set_location();
    }
}