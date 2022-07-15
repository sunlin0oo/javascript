export default class ClassB{
    public a:number=1;
    private b:number=1;
    protected c:number=1;
    constructor(){

    }
    public play():void
    {
        console.log("play")
    }
    protected run():void{
        console.log("run")
    }
    private getTime():void{
        console.log("getTime")
    }
}
