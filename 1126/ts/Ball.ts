import IBall from "./interface/IBall";

export default class Ball implements IBall{
    width:number=1;
    height:number;
    readonly ID:string="Ball_Id";
    constructor(){
        this.height=2;
    }
    run():void
    {

    }
    play(a:number,b:number):number
    {
        return a+b;
    }
    set num(v:number){

    }
    get num():number{
        return 1;
    }
}