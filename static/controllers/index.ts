import {FilterService} from '../services/filter';
import {Config, IConfig} from '../services/config';
import {Graph} from '../services/graph';
import {Api} from '../services/api';
import {Queries} from '../services/queries';
import {ChainRow} from '../models/chainrow';
import {GroupRow} from '../models/grouprow';
import {Traces} from '../models/traces';
import {Filter} from '../models/filter';
import {Histogram, IHistogramData} from '../models/histogram';

export interface IIndexScope extends ng.IScope {
    api: Api;
    filter: Filter;
    chains: Array<ChainRow>;
    groups: Array<GroupRow>;
    traces: Traces;
    histogram: Histogram;
} 

export class IndexController {

    static $inject = ['api', '$scope', '$q', '$timeout', '$location', 'queries', 'graph', 'config', 'filter'];

    constructor(
        private api: Api,
        private $scope: IIndexScope,
        private $q,
        private $timeout,
        private $location,
        private queries: Queries,
        private graph: Graph,
        private config: Config,
        private filter: FilterService
    ) {
        $scope.api = this.api;
        $scope.filter = this.filter.state;
        $scope.chains = [];
        $scope.groups = [];
        $scope.histogram = new Histogram();

        $scope.$watch(() => this.filter.state, () => {
            filter.set_location();
            this.query();
        }, true);

        $scope.$watch(() => $location.url(), () => {
            $scope.filter = this.filter.refresh();
        });
    }

    query() {
        return this.query_histogram().
            then(() => this.query_chains()).
            then(() => this.query_groups()).
            then(() => this.query_spans());
    }

    query_histogram() {
        const trace_conditions = this.filter.state.get_trace_conditions();
        const chains_conditions = this.filter.state.get_next_chains_conditions();
        const span_conditions = this.filter.state.get_span_conditions();
        return this.api.elasticsearch(
            this.queries.histogram(trace_conditions, chains_conditions, span_conditions, '15m'),
            { search_type: 'count' }
        ).then((data: IHistogramData) => {
            this.$scope.histogram.data = data;
        });
    }

    query_chains() {
        const trace_conditions = this.filter.state.get_trace_conditions();
        const chains_conditions = this.filter.state.get_next_chains_conditions();
        const order = this.filter.state.get_order();
        return this.api.elasticsearch(this.queries.chains(trace_conditions, chains_conditions, order), { search_type: 'count' }).then((data) => {
            const chains = [];
            angular.forEach(data.aggregations.chains.filtered.chain_path.buckets, (bucket) => {
                chains.push(new ChainRow(bucket, chains_conditions['chains.level'], chains_conditions['chains.prefix'], this.filter.state));
            });
            this.$scope.chains = chains;
        });
    }
    
    query_groups() {
        if(this.filter.state.group_field === undefined){
            return this.$q.when();
        }
        const trace_conditions = this.filter.state.get_trace_conditions();
        const chains_conditions = this.filter.state.get_next_chains_conditions();
        const span_conditions = this.filter.state.get_span_conditions();
        const order = this.filter.state.get_order();
        return this.api.elasticsearch(this.queries.groups(trace_conditions, chains_conditions, span_conditions,
                              this.filter.state.group_field, this.filter.state.aggr_field, order),
                              { search_type: 'count' }).then((data) => {
            const groups = [];
            angular.forEach(data.aggregations.spans.filtered.spans.buckets, (bucket) => {
                groups.push(new GroupRow(bucket, this.filter.state));
            });
            this.$scope.groups = groups;
        });
    }

    query_spans() {
        const filter = this.filter;
        if (
            filter.state.cur_chain_path === undefined &&
            filter.state.traceid === undefined &&
            filter.state.group_field === undefined
        ) {
            return this.$q.when();
        }
        const span_conditions = filter.state.get_span_conditions();
        const chain_conditions = filter.state.get_chain_conditions();
        const trace_conditions = filter.state.get_trace_conditions();
        const order = filter.state.get_order();
        this.config.get().then((config) => {
            var system = trace_conditions.terms['system'];
            var traceid = trace_conditions.prefix['id'];
            if(traceid && (!system || config.log_search_api[system])){
                return this.api.logsearch(traceid, system, trace_conditions.date.from, trace_conditions.date.to)
                .then((data) => {
                    var hits = {
                        hits: data.map((trace) => {
                            return {
                                _source: trace
                            };
                        }),
                        total: data.length
                    };
                    this.$scope.traces = new Traces(
                        hits, filter.state.cur_chain_prefix, filter.state.current_chain_services
                    );
                });
            }else{
                return this.api.elasticsearch(
                    this.queries.spans(
                        trace_conditions,
                        chain_conditions,
                        span_conditions,
                        order,
                        filter.state.qpage,
                        filter.state.size
                    ), {}
                ).then((data) => {
                    this.$scope.traces = new Traces(
                        data.hits, filter.state.cur_chain_prefix, filter.state.current_chain_services
                    );
                });
            }
        });
    }

    clear() {
        this.$scope.groups = [];
        this.$scope.chains = [];
        this.$scope.traces = null;
        this.filter.clear();
        this.$location.path("/chains");
    }
}
