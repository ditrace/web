import {GetMilliseconds, microsecondsToString} from '../../static/helper';
import {Traces} from '../../static/models/traces';
import {ISpan, Span} from '../../static/models/span';
import {traces_json} from './data';

describe("Traces", () => {

    var traces: Traces;

    beforeEach(() => {
        traces = new Traces(traces_json, "Authenticator", ["Authenticator", "Portal.Requisites.Service"]);
    });
    
    it("should be initialize correctly", () => {
        traces.init();
        expect(traces.spans.length).toBe(132);
        expect(traces.total).toBe(4);
        expect(traces.length).toBe(3);
    });
    
});