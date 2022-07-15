
export interface IUpdate{
    update():void;
}
export default class TimeManager{
    private static _instance:TimeManager;
    public updateList:Array<IUpdate>=[];
    private ids:number=0;
    public canvas?:HTMLCanvasElement;
    private constructor(){
       
    }
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
    
    private anmiation():void
    {
        this.ids=requestAnimationFrame(()=>this.anmiation());
        this.updateList.forEach((item:IUpdate)=>item.update());
    }
}
