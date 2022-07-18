import EmitterEvent from "./EmitterEvent";
import IEvent from "./IEvent";

export default class EmitterTarget{
  private disc:IEvent={};
   public constructor(){

    }
    public addEventListener(type:string,hanlder:Function):void
    {
        //判断是否存在
        if(!this.disc[type])this.disc[type]=[];
        if(this.disc[type].indexOf(hanlder)>-1) return;
        this.disc[type].push(hanlder);
    }
    public dispatchEvent(evt:EmitterEvent):void{
        if(!this.disc[evt.type] || this.disc[evt.type].length===0) return;
        for(var i:number=0;i<this.disc[evt.type].length;i++){
            this.disc[evt.type][i].call(this,evt);
        }
    }
}