import ClassB from "./ClassB";

export default class ClassC extends ClassB{
    constructor(){
        super();
        this.c=10;
        this.run();
    }
    public play():void
    {
        super.play();
    }
    // 重写、覆盖
    protected run():void{
        // override
        super.run();
    }
    // 超类或者父类中已经存在该方法，但是这个方法是私有的，因此不能覆盖和重写
    // private getTime():void
    // {

    // }

}