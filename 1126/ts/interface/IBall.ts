export default interface IBall{
    width:number;
    height:number;
    run():void;
    play(a:number,b:number):number;
    // static不可出现
    readonly ID:string;
    set num(v:number);
    get num():number;
}