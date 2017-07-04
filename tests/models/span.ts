import {GetMilliseconds, microsecondsToString} from '../../static/helper';
import {ISpan, Span} from '../../static/models/span';

describe("Span", () => {

    var span: Span;

    beforeEach(() => {
        span = new Span(<ISpan>{
            host: "vm-auth11",
            prefix: "",
            rc: "200",
            sd: 270531,
            spanid: "85b79ddd",
            targetid: "AuthService.Service",
            timeline: {
                sr: "2016-03-30T05:13:17.0981681Z",
                ss: "2016-03-30T05:13:17.3686998Z"
            }
        }, "d63b25dae1b34d609e30ec3f2c8eecc6", "", [], "2016-03-30T05:13:17.0981681Z", "system");
        span.trace_duration = 270531;
        span.init(false);
    });

    it('has initialized correctly', () => {
        expect(span.folded).toBeFalsy();
        expect(span.hidden).toBeFalsy();
        expect(span.cd_pretty).toBe('0.3 sec');
        expect(span.sd_pretty).toBe('0.3 sec');
        expect(span.style.cs).toBe(0);
        expect(span.style.sr).toBe(0);
        expect(span.style.sd).toBe(90);
        expect(span.style.cr).toBe(0);
    });
});