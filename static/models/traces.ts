import {Trace} from './trace';
import {ISpan, Span} from './span';
import {GetMilliseconds, microsecondsToString} from '../helper';

interface TraceDictionary{
    [id: string]: Trace
}

export class Traces {
    length: number;
    total: number;
    spans: Array<Span>;
    
    constructor(public hits, private chain_prefix: string, private chain_services: Array<string>) {
        this.length = hits.hits.length;
        this.total = hits.total;
        this.spans = new Array<Span>();
    }

    init() {
        var tracesById: TraceDictionary = {};
        var count = 0;
        angular.forEach(this.hits.hits, (hit) => {
            var trace: Trace = tracesById[hit._source.id];
            if(trace === undefined){
                trace = new Trace(hit._source.id);
                tracesById[hit._source.id] = trace;
                count ++;
            }
            trace.timestamp = trace.timestamp || hit._source.timestamp;
            if (GetMilliseconds(trace.timestamp) > GetMilliseconds(hit._source.timestamp))
                trace.timestamp = hit._source.timestamp;
            trace.system = hit._source.system;

            angular.forEach(hit._source.spans, (json: ISpan) => {
                var created = false;
                if (trace.spansById[json.spanid] == undefined) {
                    trace.spansById[json.spanid] = new Span(json,
                                                            trace.id,
                                                            this.chain_prefix,
                                                            this.chain_services,
                                                            trace.timestamp,
                                                            trace.system);
                    created = true;
                }
                var span: Span = trace.spansById[json.spanid];
                angular.forEach(json, (v, k) => {
                    span[k] = span[k] || json[k];
                });
                span.props.timeline = span.props.timeline || <any>{};
                angular.forEach(json.timeline, (ts: string, name: string) => {
                    if (!span.props.timeline[name] || GetMilliseconds(span.props.timeline[name]) < GetMilliseconds(ts))
                        span.props.timeline[name] = ts;
                });
                if (trace.spansById[span.props.parentspanid] == undefined)
                    trace.non_existed_parent = span.props.parentspanid;
                if (created) {
                    var childs = trace.children[span.props.parentspanid || ''] || [];
                    trace.children[span.props.parentspanid || ''] = childs;
                    if (span.props.root != undefined) {
                        var roots = trace.children['roots'] || [];
                        roots.push(span);
                        trace.children['roots'] = roots;
                    }
                    childs.push(span);
                }
            });
        });
        var fold = count > 1;
        var traces: Array<Trace> = [];
        angular.forEach(tracesById, (trace: Trace, id) => {
            trace.init(fold);
            traces.push(trace);
        });
        traces.sort((t1, t2) => (t2.duration || 0) - (t1.duration || 0));
        var spans = [];
        angular.forEach(traces, (trace) => {
             spans.push.apply(spans, trace.spans);
        });
        this.spans = spans;
    }
}



