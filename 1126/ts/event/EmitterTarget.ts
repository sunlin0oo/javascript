import EmitterEvent from "./EmitterEvent";
import IEvent from "./IEvent";

export default class EmitterTarget{
// 用于存储事件函数
  private disc:IEvent={};
   public constructor(){

    }
    public addEventListener(type:string,hanlder:Function):void
    {
        //判断事件是否存在
        if(!this.disc[type])this.disc[type]=[];
        if(this.disc[type].indexOf(hanlder)>-1) return;
        // 将相同的事件的函数放入其中
        this.disc[type].push(hanlder);
    }
    public dispatchEvent(evt:EmitterEvent):void{
         console.log(evt.type);
         console.log("this",this);
        if(!this.disc[evt.type] || this.disc[evt.type].length===0) return;
        for(var i:number=0;i<this.disc[evt.type].length;i++){
            // 修改this指向
            this.disc[evt.type][i].call(this,evt);
        }
    }
}