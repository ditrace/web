import {Filter} from '../models/filter';
import {Traces} from '../models/traces';

declare function require(string): any;

enum Tabs {
    Chains = 0,
    Groups = 1,
    Traces = 2
}

interface IScope extends ng.IScope {
    filter: Filter;
    show(path: string, $event?: JQueryEventObject);
    qpage(delta: number);
    traces: Traces;
    active: number;
}

export class DTraceTabs {
    restrict = 'E';
    template = require('./tabs.html');
    scope = {
        filter: '=',
        traces: '=',
        chains: '=',
        groups: '=',
    };
    replace = true;

    $scope: IScope;

    constructor(private $location: ng.ILocationService) {
    }

    link = (scope: IScope) => {
        this.$scope = scope;
        scope.show = (path, $event) => {
            if ($event !== undefined) {
                $event.preventDefault();
            }
            this.$location.path(path);
        };
        scope.active = this.active();

        scope.qpage = (delta: number) => {
            const old_value = scope.filter.qpage;
            scope.filter.qpage += delta;
            if (scope.filter.qpage < 0) {
                scope.filter.qpage = 0;
            }
            if (scope.filter.qpage * scope.filter.size > scope.traces.total) {
                scope.filter.qpage = Math.floor(scope.traces.total / scope.filter.size);
            }
        }

        scope.$watch(() => this.$location.url(), () => {
            scope.active = this.active();
        });

        scope.$watch('traces', () => {
            if(scope.traces){
                scope.traces.init();
            }
        });
    };
    
    active(): number {
        var path = this.$location.path();
        if (path === "/groups")
            return Tabs.Groups;
        if (path === "/traces")
            return Tabs.Traces
        return Tabs.Chains;
    }


    public static Factory() {
        var directive = ($location) => {
            return new DTraceTabs($location);
        };

        directive['$inject'] = ['$location'];

        return directive;
    }
}