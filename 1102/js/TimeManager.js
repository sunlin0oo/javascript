export default class TimeManager{
    /**可以执行多个轮播图*/
    /*单例模式，观测者模式*/
    static _instance;
    list=new Set();
    ids;
    //可以获取到唯一的TimeManager._instance实例
    static getInstance(){ 
        if(!TimeManager._instance){
            TimeManager._instance=new TimeManager();
        }
        return TimeManager._instance;
    }
    add(item){
        this.list.add(item);
        if(!this.ids && this.list.size>0){
            this.animation();
        }
    }

    remove(item){
        if(!this.list.has(item))return;
        this.list.delete(item);
        if(this.list.size===0 && this.ids){
            cancelAnimationFrame(this.ids);
            this.ids=undefined;
        }
    }
    update(){
        this.list.forEach(item=>{
            if(item.update) item.update();//item是每次add进来
        })
    }
    animation(){
        this.ids=requestAnimationFrame(()=>this.animation());//为了保证this指向原来的东西
        this.update();
    }

}