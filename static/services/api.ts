import {Config} from './config';
import {Queries} from './queries';
import {FilterService} from './filter';

export class Api {

    querying: boolean;
    query_err: string;

    static $inject = ['config', '$http', 'filter', 'queries'];

    constructor(private config: Config, private $http: ng.IHttpService, private filter: FilterService,
        private queries: Queries) {
    }

    logsearch(traceid, system, from?, to?): ng.IPromise<any> {
        return this.config.get().then((config) => {
            var log_search_api_url: string = config.log_search_api[system];
            if(log_search_api_url[log_search_api_url.length - 1] == '/'){
                log_search_api_url = log_search_api_url.slice(0, -1);
            }
            var url = `${log_search_api_url}/findTrace`;
            return this.query(url, 'GET', null, {
                traceid: traceid,
                system: system,
                from: from,
                to: to
            });
        }).then((response) => {
            return response.data;
        });
    }

    elasticsearch(data, params?): ng.IPromise<any> {
        return this.config.get().then((config) => {
            var url = `${config.search_url}/${this.filter.state.get_indices().join(',')}/_search`;
            return this.query(url, 'POST', data, params);
        }).then((response) => {
            return response.data;
        });
    }

    private query(url: string, method: string, data, params?): ng.IPromise<any> {
        this.querying = true;
        this.query_err = null;
        return this.$http({
            url: url,
            method: method,
            params,
            data,
        }).success((result) => {
            this.querying = false;
            return result;
        }).error((err) => {
            if (err.status && err.error) {
                this.query_err = `${err.status}, reason: ${err.error.reason}`;
            } else {
                this.query_err = 'can not query index';
            }
            this.querying = false;
        });
    }
}