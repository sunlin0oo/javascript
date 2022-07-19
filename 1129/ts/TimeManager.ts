import { clearCanvas } from "./decorate";

export interface IUpdate{
    update():void;
}
export default class TimeManager{
    private static _instance:TimeManager;
    public updateList:Array<IUpdate>=[];
    private ids:number=0;//动画
    public canvas?:HTMLCanvasElement;
    private constructor(){
       
    }
     //单例
    // public static getInstance():TimeManager
    // {
    //     return TimeManager._instance || (TimeManager._instance=new TimeManager());
    // }
    public static get instance():TimeManager
    {
        return TimeManager._instance || (TimeManager._instance=new TimeManager());
    }
    public add(item:IUpdate):void
    {

        if(this.updateList.indexOf(item)>-1) return;
        this.updateList.push(item);
        if(this.ids===0 && this.updateList.length>0){
            this.anmiation();
        }
    }
    public remove(item:IUpdate):void
    {
     
        var index=this.updateList.indexOf(item);
        if(index<0) return;
        this.updateList.splice(index,1);
        if(this.updateList.length===0 && this.ids>0){
            cancelAnimationFrame(this.ids);
            this.ids=0;
        }
    }

    /**装饰器==>是在方法上面的通过修改descriptor，我们可以实现对方法进行重新描述。
     * 对于静态方法，第一个参数为类的构造函数。对于实例方法，为类的原型对象
        第二个参数为方法名。
        第三个参数为方法描述符。
        方法装饰器可以有返回值，返回值会作为方法的属性描述符
        https://blog.csdn.net/qq_36205941/article/details/124675122
    */
    @clearCanvas(TimeManager.instance)//执行函数
    // 不是当前方法生成故调用不到updateList
    private anmiation():void
    {
        console.log(this);//TimeManager只有方法没有属性
     // 这样保持this统一
        this.ids=requestAnimationFrame(()=>this.anmiation());
        this.updateList.forEach((item:IUpdate)=>item.update());
    }
}
