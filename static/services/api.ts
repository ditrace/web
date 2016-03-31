import {Config} from './config';
import {Queries} from './queries';
import {FilterService} from './filter';

export class Api {

    querying: boolean;
    query_err: string;

    constructor(private config: Config, private $http: ng.IHttpService, private filter: FilterService, private queries: Queries) {
    }

    query(data, params?): ng.IPromise<any> {

        this.querying = true;
        this.query_err = null;
        return this.config.get().then((config) => {
            return this.$http({
                url: `${config.search_url}/${this.filter.state.get_indices().join(',')}/_search`,
                method: 'POST',
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
        }).then((response) => {
            return response.data;
        });
    }    

    static $inject = ['config', '$http', 'filter', 'queries'];
}