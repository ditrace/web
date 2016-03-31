import {GetMilliseconds, microsecondsToString} from '../helper';
import {IChildren, Span} from './span';

interface SpansById {
    [id: string]: Span;
}

export class Trace {
  
    timestamp: string;
    spansById: SpansById = {};
    children: IChildren = {};
    spans: Array<Span> = [];
    non_existed_parent = 'roots';
    range: {
        from: string,
        to: string
    };
    duration: number;
    system: string;

    constructor(public id){
        this.range = <any>{};
    }
    
    travers(fn: (span: Span) => void) {
        var stack = [{ elements: this.children[''] || this.children['roots'] || this.children[this.non_existed_parent], index: 0 }];
        while (stack.length > 0) {
            var stackItem = stack.pop();
            var elements = stackItem.elements;
            var index = stackItem.index;
            if (index > elements.length - 1)
                continue;
            var span = elements[index];
            fn(span);
            if (this.children[span.props.spanid]) {
                stack.push({ elements: elements, index: index + 1 });
                stack.push({ elements: this.children[span.props.spanid], index: 0 });
                continue;
            }
            stack.push({ elements: elements, index: index + 1 });
        }
    }
  
    init(fold: boolean) {
        var timestamps = [];
        var model = this;

        angular.forEach(model.children, (spans, childid) => {
            spans.sort((a, b) => {
            if ((a.props.timeline.cs || a.props.timeline.sr) == undefined || (b.props.timeline.cs || b.props.timeline.sr) == undefined)
                return 0;
            return (GetMilliseconds(a.props.timeline.cs || a.props.timeline.sr) - GetMilliseconds(b.props.timeline.cs || b.props.timeline.sr));
            });
            if (spans.length && spans.reduce((a, b) => {return (model.children[b.props.spanid] || []).length;}, 0) == 0) {
                var child = model.spansById[childid];
                while (child) {
                    var last = spans[spans.length - 1];
                    child.max_child_timeline = Math.max(GetMilliseconds(last.props.timeline.cr || last.props.timeline.ss || last.props.timeline.sr || last.props.timeline.cs),
                    GetMilliseconds(child.props.timeline.cr || child.props.timeline.ss || child.props.timeline.sr || child.props.timeline.cs));
                    child = model.spansById[child.props.parentspanid];
                }
            }
        });


        this.travers((span: Span) => {
            if (typeof (span.props.parentspanid) != 'undefined') {
            var parent = model.spansById[span.props.parentspanid] || { offset: 0, chain_level: 0, max_child_timeline: 0 };
            if (span.props.timeline.cr || span.props.timeline.ss)
                parent.max_child_timeline = Math.max(parent.max_child_timeline || 0, GetMilliseconds(span.props.timeline.cr || span.props.timeline.ss));
            var offset = 0;
            if (span.props.timeline.sr && span.props.timeline.cs) {
                var sr = GetMilliseconds(span.props.timeline.sr);
                var cs = GetMilliseconds(span.props.timeline.cs);
                if (sr < cs) {
                offset += cs - sr;
                }
            }

            if (span.props.timeline.ss && span.props.timeline.cr) {
                var ss = GetMilliseconds(span.props.timeline.ss);
                var cr = GetMilliseconds(span.props.timeline.cr);
                if (ss > cr) {
                offset -= ss - cr;
                }
            }
            span.offset = offset + parent.offset;
            span.parent_offset = parent.offset;
            span.chain_level = parent.chain_level + 1;
            } else {
            span.offset = 0;
            span.parent_offset = 0;
            span.chain_level = 0;
            }
            span.offset_pretty = microsecondsToString(span.offset * 1000);
            span.offset_sign = span.offset > 0 ? '+' : '';
            angular.forEach(span.props.timeline, (value: string) => {
            timestamps.push({
                ts: value,
                ms:GetMilliseconds(value) + span.offset });
            });
            model.spans.push(span);
        });

        timestamps.sort(function (a, b) {return a.ms - b.ms;});
        this.range.from = this.timestamp;
        this.range.to = timestamps[timestamps.length - 1].ts;
        this.duration = (timestamps[timestamps.length - 1].ms - GetMilliseconds(this.timestamp)) * 1000;
        var spans = [];
        this.travers((span) => {
            span.trace_range_from = this.range.from;
            span.trace_range_to = this.range.to;
            span.trace_duration = this.duration;
            span.children = this.children;
            span.init(fold);
            spans.push(span);
        });
        this.spans = spans;
    }
}

