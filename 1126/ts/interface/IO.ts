import { F } from "../O";

export interface IA{
    num:number;
    a():void;
}
export interface IB{
    step:number;
    b():void;
}

export interface IC{
    sum:number;
    c():void;
}

//------ 构造函数接口 -------
export interface ID{
    // 返回IE
    new (n:number):IE;
}
// 设置接口实现tick方法
export interface IE{
    tick():void;
}
//--------------------
// 接口的继承
export interface IG extends IE,IC{
    play():void;
}
// 通过接口创建对象
export interface IObj{
    [key:string]:number|string|boolean|object|Array<number>;
}

// 接口继承类
export interface IH extends F{
    getSum():void;
    /**相当于添加
    num:number;
    runTime():void;
    */ 
}