interface ILog {
    data: {}
}

export class Log{
    
    unfolded: boolean;
    timestamp: Date;
    data: {};
    
    constructor(json: ILog){
        this.data = json.data;
        this.timestamp = new Date(json.data['@timestamp'])
    }
    
    unfold(value){
    if (value != undefined)
        this.unfolded = value;
    else
        this.unfolded = !(this.unfolded || false);
        
    }
}
