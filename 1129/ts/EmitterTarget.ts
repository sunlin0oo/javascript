import EmitterEvent from "./EmitterEvent";
export interface IEmitter{
    [key:string]:Array<Function|null>;
}
export default class EmitterTarget{
    private disc:IEmitter={};
    constructor(){

    }
    addEventListener(type:string,listener:Function):void
    {
        if(!this.disc[type])this.disc[type]=[];
        if(this.disc[type].indexOf(listener)>-1) return;
        this.disc[type].push(listener);
    }
    removeEventListener(type:string,listener:Function):void
    {
        if(!this.disc[type]) return;
        var index=this.disc[type].indexOf(listener);
        if(index<0) return;
        this.disc[type][index]=null;
    }
    dispatchEvent(evt:EmitterEvent):void{
        if(!this.disc[evt.type]) return;
        evt.currentTarget=this;
        for(var i=0;i<this.disc[evt.type].length;i++){
            if(this.disc[evt.type][i]===null) continue;
            (this.disc[evt.type][i] as Function).call(this,evt);
        }
       for(var j=0;j<this.disc[evt.type].length;){
           if(this.disc[evt.type][j]===null){
             this.disc[evt.type].splice(j,1);
             continue;
           }
           j++;
       }
    }
}