export interface IAggrBucket {
    doc_count: number;
    key: string;
    max_duration: {value: number};
    min_duration: {value: number};
    percentiles_duration: {
        values: {
            "25.0": number;
            "50.0": number;
            "75.0": number;
            "95.0": number;
            "99.0": number;
        }
    }
}