import {Graph} from '../services/graph';
import {FilterService} from '../services/filter';
import {Histogram, IHistogramData} from '../models/histogram';

declare function require(string): any;

export interface IHistogramScope extends ng.IScope {
    model: Histogram;
    select(string);
}

export class DTraceHistogram {
    restrict = 'E';
    template = require('./histogram.html');
    scope = {
        model: "="
    };
    replace = true;
    constructor(private graph: Graph, private $timeout: ng.ITimeoutService, private filter: FilterService) {
    }

    link = (scope: IHistogramScope) => {
        scope.model.value_func = 'p95';
        scope.select = (value) => {
            scope.model.value_func = value;
            this.draw(scope.model);
        }
        scope.$watch('model.data', (data: IHistogramData) => {
            if(data === undefined){
                return;
            }
            scope.select(scope.model.value_func);
            this.draw(scope.model);
        });
    }

    draw(model: Histogram) {
        this.graph.draw(model.data, model.value_func, (start, end) => {
            if (end - start < 10000 || model.updating) {
                return;
            }
            model.updating = true;
            this.filter.state.date_from = moment(start).toISOString(); 
            this.filter.state.date_to = moment(end).toISOString(); 
            this.$timeout(() => {
                model.updating = false;
            }, 200);
        });
    }

    public static Factory() {
        var directive = (graph, $timeout, filter) =>
        {
            return new DTraceHistogram(graph, $timeout, filter);
        };

        directive['$inject'] = ['graph', '$timeout', 'filter'];

        return directive;
    }    
}