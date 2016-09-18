import {Config, IConfig} from '../services/config';
import {Log} from '../models/log';
import {ElasticSearchLogsProvider} from '../services/es';
import {LogsSearchApiProvider} from '../services/logsearchapi';

export class LogsController {

    static $inject = ['$http', '$scope', '$q', '$location', '$timeout', 'config', 'es', 'logsearchapi'];

    constructor($http, $scope, $q, $location, $timeout, config: Config, es: ElasticSearchLogsProvider,
    logsearchapi: LogsSearchApiProvider) {
        $scope.unfold = function() {
            $scope.unfolded = !($scope.unfolded || false);
            angular.forEach($scope.logs, function(log) {
                log.unfold($scope.unfolded);
            });
        };

        $scope.download = function($event) {
            $event.target.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent($scope.raw_content);
        };

        config.get().then((config) => {
            var params = $location.search();
            if(config.log_search_api[params.system]){
                logsearchapi.get($scope, config.log_search_api[params.system]);
            }else{
                es.get($scope, config);
            }
        });
    }
}