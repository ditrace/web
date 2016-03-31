import {IAggrBucket} from './bucket';

export interface IHistogramData {
    aggregations: {
        traces: {
            buckets: Array<IAggrBucket>
        }
    }
}

export class Histogram{
    value_func: string;
    data: IHistogramData;
    updating: boolean;
    
    constructor(){
        this.value_func = 'p95';
    }
}