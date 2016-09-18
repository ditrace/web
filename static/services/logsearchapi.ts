import {IConfig} from '../services/config';
import {Log} from '../models/log';

export class LogsSearchApiProvider {

    static $inject = ['$location', '$http'];

    constructor(private $location: ng.ILocationService, private $http: ng.IHttpService) {
    }

    public get($scope, url: string) {
        var params = this.$location.search();
        $scope.traceid = params.traceid;
        $scope.logs = [];
        $scope.raw_content = "";
        $scope.querying = "Querying ...";
        this.$http({
            url: url,
            method: 'GET',
            params: {
                'traceId': $scope.traceid,
                'from': params.from,
                'to': params.to,
                'out': 'json'
            }
        }).success((data: any) => {
            var raw = [];
            angular.forEach(data, (hit) => {
                var log = new Log({ data: hit });
                $scope.logs.push(log);
                raw.push([log.data['@timestamp'],
                    log.data['Level'],
                    log.data['ServiceId'],
                    log.data['Host'],
                    log.data['Message']
                ].join("\t"));
            });
            $scope.raw_content = raw.join("\r\n");
            $scope.querying = "";
        }).error(function (data, status, headers, config) {
            $scope.querying = data;
        });
    }
}