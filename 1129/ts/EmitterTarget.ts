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
        // 判断是否存在
        if(!this.disc[type])this.disc[type]=[];
        // 查找事件是否存在
        if(this.disc[type].indexOf(listener)>-1) return;
        this.disc[type].push(listener);
    }
    // 删除事件函数
    removeEventListener(type:string,listener:Function):void
    {
        if(!this.disc[type]) return;
        // 寻找删除事件函数的索引
        var index=this.disc[type].indexOf(listener);
        if(index<0) return;
        this.disc[type][index]=null;
    }
    dispatchEvent(evt:EmitterEvent):void{
        if(!this.disc[evt.type]) return;
        evt.currentTarget=this;
        for(var i=0;i<this.disc[evt.type].length;i++){
            if(this.disc[evt.type][i]===null) continue;
            // 断言确保是Function类型
            (this.disc[evt.type][i] as Function).call(this,evt);//改变this指向
        }
       for(var j=0;j<this.disc[evt.type].length;){
           if(this.disc[evt.type][j]===null){
            // 删除一个 
             this.disc[evt.type].splice(j,1);
             continue;
           }
           j++;
       }
    }
}