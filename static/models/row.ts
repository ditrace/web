import {IAggrBucket} from './bucket';
import {microsecondsToString} from '../helper';

export class Row {
    link: string;
    traces_link: string;
    min_duration: string;
    max_duration: string;
    p25: string;
    p50: string;
    p75: string;
    p95: string;
    p99: string;
    
    constructor(public bucket:IAggrBucket){
       this.min_duration = microsecondsToString(bucket.min_duration.value);
       this.max_duration = microsecondsToString(bucket.max_duration.value);
       this.p25 = microsecondsToString(bucket.percentiles_duration.values["25.0"]);
       this.p50 = microsecondsToString(bucket.percentiles_duration.values["50.0"]);
       this.p75 = microsecondsToString(bucket.percentiles_duration.values["75.0"]);
       this.p95 = microsecondsToString(bucket.percentiles_duration.values["95.0"]);
       this.p99 = microsecondsToString(bucket.percentiles_duration.values["99.0"]);
    }
}