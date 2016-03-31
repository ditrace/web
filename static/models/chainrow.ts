import {Row} from './row';
import {Filter} from './filter';
import {IAggrBucket} from './bucket';

export class ChainRow extends Row{

    services: Array<string>;

    constructor(bucket:IAggrBucket, public level:number, public prefix: string, filter: Filter){
        super(bucket)
        this.services = this.bucket.key.split('->');
        this.prefix = prefix;
        var location = filter.get();
        if(this.prefix !== undefined)
            location.cur_chain_prefix = this.prefix;
        location.cur_chain_path = this.bucket.key;
        delete location.annotations;
        location.next_chains_level = (this.level + 1).toString();
        location.next_chains_prefix = ((this.prefix || '') + '->' + this.bucket.key).replace(/^->/, '');
        this.link = '#/chains?' + $.param(location);
        this.traces_link = '#/traces?' + $.param(location);
    }
}
