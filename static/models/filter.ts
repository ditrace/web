export interface ILocation {
    selection_count_order: string;
    selection_order_name: string;
    selection_order_value: string;
    annotations: string;
    group_field: string;
    aggr_field: string;
    traceid: string;
    next_chains_level: string;
    next_chains_prefix: string;
    cur_chain_prefix: string;
    cur_chain_path: string;
    system: string;
    page: string;
    date_from: string;
    date_to: string;
}

export interface ISpanConditions {
    terms: {
        [key: string]: string
    },
    range_ex: {
        [key: string]: {
            to: any,
            from: any
        }
    },
    range_inc: {
        [key: string]: {
            to: any,
            from: any
        }
    }
}

export class Filter {
    selection_count_order = false;
    selection_order_name: string;
    selection_order_value = false;
    annotations: string;
    group_field: string;
    aggr_field: string;
    traceid: string;
    next_chains_level: number;
    next_chains_prefix: string;
    cur_chain_prefix: string;
    cur_chain_path: string;
    system: string;
    page: number;
    date_from: string;
    date_to: string;

    current_chain_services: Array<string>;
    qpage: number;
    size: number;

    constructor(params: ILocation, system?: string) {
        this.traceid = params.traceid;
        if (params.traceid === undefined) {
            this.date_from = moment().subtract(1, 'hours').toISOString();
            this.date_to = moment().toISOString();
        }
        this.date_from = params.date_from || this.date_from;
        this.date_to = params.date_to || this.date_to;
        this.selection_count_order = params.selection_count_order == "true";
        this.selection_order_value = params.selection_order_value == "true";
        this.selection_order_name = params.selection_order_name || "percentiles_duration.95";
        this.annotations = params.annotations;
        this.group_field = params.group_field;
        this.aggr_field = params.aggr_field || 'cd';
        this.system = params.system || system;
        this.next_chains_level = parseInt(params.next_chains_level || '0');
        this.next_chains_prefix = params.next_chains_prefix;
        this.cur_chain_prefix = params.cur_chain_prefix;
        this.cur_chain_path = params.cur_chain_path;
        this.page = parseInt(params.page) || 0;

        this.current_chain_services = (this.cur_chain_path || '').split('->');
        this.qpage = 0;
        this.size = 50;
        if (this.traceid !== undefined)
            this.size = 1000;

    }

    get(): ILocation {
        var result = {
            selection_count_order: "" + this.selection_count_order,
            selection_order_name: this.selection_order_name,
            selection_order_value: "" + this.selection_order_value,
            annotations: this.annotations,
            group_field: this.group_field,
            aggr_field: this.aggr_field,
            traceid: this.traceid,
            next_chains_level: "" + this.next_chains_level,
            next_chains_prefix: this.next_chains_prefix,
            cur_chain_prefix: this.cur_chain_prefix,
            cur_chain_path: this.cur_chain_path,
            system: this.system,
            page: "" + this.page,
            date_from: this.date_from,
            date_to: this.date_to
        };
        angular.forEach(result, (value, key) => {
            if (value === undefined || value === '')
                delete result[key];
        });
        return result;
    }

    get_span_conditions(): ISpanConditions {
        var conditions: ISpanConditions = { terms: {}, range_ex: {}, range_inc: {} };
        var must_conditions = (this.annotations || '').split('&&');
        angular.forEach(must_conditions, (condition) => {
            if (this.try_split(condition, '==', (name, value) => { conditions.terms[name] = value; 
                }))
                return;
            if (this.try_split(condition, '<=', (name, value) => {
                this.assign_value(conditions.range_inc, name, 'to', value);
            }))
                return;
            if (this.try_split(condition, '>=', (name, value) => { 
                this.assign_value(conditions.range_inc, name, 'from', value);
            }))
                return;
            if (this.try_split(condition, '<', (name, value) => { 
                this.assign_value(conditions.range_ex, name, 'to', value);
            }))
                return;
            if (this.try_split(condition, '>', (name, value) => { 
                this.assign_value(conditions.range_ex, name, 'from', value);
            }))
                return;
        });
        return conditions;
    }

    get_next_chains_conditions() {
        return {
            'chains.level': this.next_chains_level,
            'chains.prefix': this.next_chains_prefix,
        };
    }

    get_chain_conditions() {
        if (this.cur_chain_path === undefined)
            return {
                'chains.path': undefined,
                'chains.prefix': undefined
            };
        return {
            'chains.path': this.cur_chain_path,
            'chains.prefix': this.cur_chain_prefix
        };
    }

    get_trace_conditions() {
        var conditions = {
            terms: {},
            date: {
                from: undefined,
                to: undefined
            },
            prefix: {}
        };
        if (this.traceid !== undefined && this.traceid.length)
            conditions.prefix['id'] = this.traceid;
        if (this.system !== undefined && this.system.length)
            conditions.terms['system'] = this.system;
        if (this.date_from !== undefined)
            conditions.date.from = this.date_from;
        if (this.date_to !== undefined)
            conditions.date.to = this.date_to;
        return conditions;
    }

    private assign_value(dict, name, prop, value){
        if(dict[name] === undefined)
            dict[name] = <any>{};
        dict[name][prop] = value;
    }

    private try_split(condition, separator, success) {
        var parts = condition.split(separator);
        if (parts.length == 2) {
            success(parts[0].trim(), parts[1].trim());
            return true;
        }
        return false;
    }

    add_annotation(key, name, value) {
        if(value == undefined)
            return;
        var conditions = this.get_span_conditions();
        conditions[key][name] = value;
        var annotations = '';
        angular.forEach(conditions.terms, (value, name) => {
            annotations += name + ' == ' + value + ' && ';
        });
        angular.forEach(conditions.range_ex, (value, name) => {
            if (value.from !== undefined)
                annotations += name + ' > ' + value.from + ' && ';
            if (value.to !== undefined)
                annotations += name + ' < ' + value.to + ' && ';
        });
        angular.forEach(conditions.range_inc, function(value, name) {
            if (value.from !== undefined)
                annotations += name + ' >= ' + value.from + ' && ';
            if (value.to !== undefined)
                annotations += name + ' <= ' + value.to + ' && ';
        });
        this.annotations = annotations.substring(0, annotations.length - 4);
    }

    set_chain(chain, next) {
        this.cur_chain_prefix = chain.prefix;
        this.cur_chain_path = chain.path;
        this.current_chain_services = chain.services;
        if (next) {
            this.next_chains_level = chain.level + 1;
            this.next_chains_prefix = (chain.prefix + '->' + chain.path).replace(/^->/, '');
        }
        if (chain) {
            this.add_annotation('terms', 'prefix', chain.prefix);
            this.add_annotation('terms', 'targetid', chain.services[chain.services.length - 1]);
        }
    };

    set_page(num) {
        this.page = num;
    }

    get_indices() {
        var result = [];
        if (this.date_from && this.date_from) {
            var start = moment(this.date_from).utc()
            var end = moment(this.date_to).utc();
            while (start <= end) {
                result.push('traces-' + start.format('YYYY.MM.DD'));
                if (start.format('YYYY.MM.DD') == end.format('YYYY.MM.DD'))
                    break;
                start = start.add(1, 'days');
            }
            if (result.length === 0 || result[result.length - 1] !== 'traces-' + end.format('YYYY.MM.DD'))
                result.push('traces-' + end.format('YYYY.MM.DD'));

        } else {
            result.push('traces-' + moment.utc().format('YYYY.MM.DD'));
        }
        return result;
    }

    get_order() {
        var result = [{}, { _count: 'desc' }];
        if (this.selection_order_value === true)
            result[0][this.selection_order_name] = 'asc';
        else
            result[0][this.selection_order_name] = 'desc';
        if (this.selection_count_order === false)
            result[1]["_count"] = 'asc';
        return result;
    }
} 