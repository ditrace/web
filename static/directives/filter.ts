import {IConfig, Config} from '../services/config'; 
import {FilterService} from '../services/filter'; 

declare function require(string): any;

interface IScope extends ng.IScope
{
    systems: Array<string>;
    groupBy: {};
    date: {
        startDate: Date;
        endDate: Date;
    }
    date_options: {
            timePicker: boolean;
            format: string;
            timePickerIncrement: number;
            timePicker12Hour: boolean;
            timePickerSeconds: boolean;
            ranges: {
                'Hour ago': [moment.Moment, moment.Moment];
                'Last 24 hours': [moment.Moment, moment.Moment];
                'Last 7 Days': [moment.Moment, moment.Moment];
                'Last 30 Days': [moment.Moment, moment.Moment];
            };
    };
    group_field: string;
    aggr_field: string;
    system: string;
    traceid: string;
    annotations: string;
    apply_trigger: boolean;
    
    change_groupby(value: string);
    change_aggrby(value: string);
    change_system(value: string);
    update();
}

export class DTraceFilter {
    restrict = 'E';
    template = require('./filter.html');
    scope = {};
    replace = true;
    
    constructor(private config: Config, private $cookies: ng.cookies.ICookiesService, private filter: FilterService) {
    }

    link = ($scope: IScope) => {
        this.config.get().then((config) => {
            $scope.systems = config.systems;
            $scope.groupBy = config.groupBy;
        });
        $scope.apply_trigger = false;
        $scope.change_groupby = (value) => {
            $scope.group_field = value;
            $scope.update();
        };
        $scope.change_aggrby = (value) => {
            $scope.aggr_field = value;
            $scope.update();
        };
        $scope.change_system = (value) => {
            $scope.system = value;
            $scope.update();
        };
        $scope.update = () => {
            this.filter.state.traceid = $scope.traceid;
            this.filter.state.group_field = $scope.group_field;
            this.filter.state.aggr_field = $scope.aggr_field;
            this.filter.state.annotations = $scope.annotations;
            if(this.filter.state.system !== $scope.system){
                this.filter.state.system = $scope.system;
                this.$cookies.put('dtrace_system', $scope.system, { expires: new Date((new Date()).getTime() + 365 * 24 * 3600 * 1000) });
            }
            this.filter.state.date_from = $scope.date.startDate.toISOString();
            this.filter.state.date_to = $scope.date.endDate.toISOString();
        };
        $scope.$watch(() => this.filter.state, () => {
            $scope.group_field = this.filter.state.group_field;
            $scope.aggr_field = this.filter.state.aggr_field;
            $scope.system = this.filter.state.system;
            $scope.annotations = this.filter.state.annotations;
            $scope.traceid = this.filter.state.traceid;
            $scope.date = {
                startDate: moment(this.filter.state.date_from).toDate(),
                endDate: moment(this.filter.state.date_to).toDate(),
            }
        });
        $scope.$watch('date', () => {
            if($scope.apply_trigger){
                $scope.update();
                $scope.apply_trigger = false;
            }
        })
        $scope.date_options = {
            timePicker: true,
            format: 'YYYY-MM-DD HH:mm',
            timePickerIncrement: 30,
            timePicker12Hour: false,
            timePickerSeconds: false,
            ranges: {
                'Hour ago': [moment().subtract(1, 'hours'), moment()],
                'Last 24 hours': [moment().subtract(1, 'days'), moment()],
                'Last 7 Days': [moment().subtract(7, 'days'), moment()],
                'Last 30 Days': [moment().subtract(30, 'days'), moment()],
            }
        };
    }
    
    public static Factory() {
        var directive = (config, cookies, filter) =>
        {
            return new DTraceFilter(config, cookies, filter);
        };

        directive['$inject'] = ['config', '$cookies', 'filter'];

        return directive;
    }    
}