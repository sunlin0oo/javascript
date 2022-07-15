import EmitterTarget from "./EmitterTarget";

export default class EmitterEvent{
    public type:string;
    public data?:object;
    public currentTarget:EmitterTarget|null=null;
    constructor(type:string,data?:object){
        this.type=type;
        this.data=data;
    }
}