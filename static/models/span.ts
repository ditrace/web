import {GetMilliseconds, microsecondsToString} from '../helper';

export interface ISpan {
    cd: number;
    sd: number;
    prefix: string;
    host: string;
    url: string;
    spanid: string;
    parentspanid: string;
    targetid: string;
    timeline: {
        cs: string;
        cr: string;
        ss: string;
        sr: string;
    };
    url_method: string;
    rc: string;
    root: string;
}

export interface IChildren {
    [id: string]: Array<Span>
}

export class Span {

    td: number;
    folded: boolean;
    hidden: boolean;
    selected: boolean;
    style: {
        cs: number;
        sr: number;
        sd: number;
        cr: number;
    };
    parent_offset: number = 0;
    offset: number = 0;
    chain_level: number = 0;
    cr_pretty: string;
    cr_title: string;
    cd_pretty: string;
    sd_pretty: string;
    cd_title: string;
    offset_pretty: string;
    offset_sign: string;
    max_child_timeline: number;
    cum_duration_pretty: string;
    trace_duration: number;
    trace_range_from: string;
    trace_range_to: string;
    children: IChildren;

    constructor(public props: ISpan,
        public traceid: string,
        public chain_prefix: string,
        public chain_services: Array<string>,
        public trace_timestamp: string,
        public trace_system: string) {
    }

    init(fold: boolean) {
        if (this.folded === undefined)
            this.folded = false;

        if (this.hidden === undefined)
            this.hidden = fold;

        if (this.chain_prefix == this.props.prefix && this.chain_services[this.chain_level] === this.props.targetid) {
            this.selected = true;
            this.hidden = false;
            this.folded = fold && this.chain_level == this.chain_services.length - 1 && this.children[this.props.spanid] !== undefined;
        }

        if (this.props.parentspanid === undefined || this.props.root !== undefined) {
            this.hidden = false;
            this.folded = fold && this.children != undefined;
        }

        this.style = {
            cs: 0,
            sr: 0,
            sd: Math.floor(100 * Math.min((this.props.sd || this.props.cd), (this.props.cd || this.props.sd)) / this.trace_duration),
            cr: 0
        };

        this.calc_style('cs', 'sr', 'client send after', 'server receive after', 0, this.parent_offset);
        this.calc_style('sr', 'cs', 'server receive after', 'client send after', this.style.cs, this.offset);
        if (this.props.timeline.cr)
            this.calc_style('cr', 'ss', 'client receive after', 'server send after', this.style.cs + this.style.sr + this.style.sd, this.parent_offset);

        if (this.td) {
            var td = Math.ceil(100 * (this.td || 0) / this.trace_duration);
            if (this.style.cr + this.style.sr < td) {
                this.style.cr = td - this.style.cr;
                if (this.style.cr > td)
                    this.style.cr = td;
                this.cr_pretty = microsecondsToString(this.td);
                this.cr_title = 'transfer duration';
            }
        }
        var style = this.style;
        var sum = Math.max(style.cs + style.sr + style.sd + style.cr, 100);
        angular.forEach(style, function(value, key) {
            style[key] = Math.floor(90 * value / sum);
        });

        this.sd_pretty = microsecondsToString(this.props.sd || this.props.cd);
        this.cd_pretty = microsecondsToString(this.props.cd || this.props.sd);
        if (this.max_child_timeline)
            this.cum_duration_pretty = microsecondsToString((this.max_child_timeline - GetMilliseconds(this.props.timeline.cs || this.props.timeline.sr)) * 1000);
    }

    calc_style(name1, name2, title1, title2, pred, _offset) {
        var us = 0;
        var timestamp = this.props.timeline[name1] || this.props.timeline[name2];
        if (timestamp != undefined)
            us = Math.floor(1000 * (GetMilliseconds(timestamp) - GetMilliseconds(this.trace_timestamp) + _offset));
        this.style[name1] = Math.max(Math.floor(100 * us / this.trace_duration) - pred, 0);
        this[name1 + '_pretty'] = microsecondsToString(us);
        this[name1 + '_title'] = title1;
        if (!this.props.timeline[name1])
            this[name1 + '_title'] = title2;
    }

    fold() {
        var stack: Array<Span> = [this];
        var found = false;
        var hidden = !this.folded;
        while (stack.length > 0) {
            var s = stack.pop();
            var childs = this.children[s.props.spanid];
            angular.forEach(childs, (child) => {
                found = true;
                stack.push(child);
                child.hidden = hidden;
                child.folded = false;
            });
        }
        if (found)
            this.folded = !this.folded;
    }
}






