export interface IConfig {
	search_url: string;
	logs_url: string;
	log_index_prefix: {};
	groupBy: {};
	systems: Array<string>;
}

export class Config {
    
    private p: ng.IPromise<IConfig>;
    
    constructor(private $http: ng.IHttpService, $q: ng.IQService){
        const d = $q.defer(); 
        this.p = d.promise;
        this.$http({
            url: 'config.json',
            method: 'GET',
        }).success((config: IConfig) => {
            d.resolve(config);
        });
    }
    
    get(): ng.IPromise<IConfig>{
        return this.p;
    }
    
    static $inject = ['$http', '$q'];
}