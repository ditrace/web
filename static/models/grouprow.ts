import {Filter} from './filter';
import {Row} from './row';

export class GroupRow extends Row{

    constructor(public bucket, filter: Filter){
        super(bucket);
        var f = new Filter(filter.get(), undefined);
        f.add_annotation('terms', f.group_field, this.bucket.key);
        this.link = '#/groups?' + $.param(f.get());
        this.traces_link = '#/traces?' + $.param(f.get());
    }
}