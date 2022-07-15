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

// 构造函数接口
export interface ID{
    new (n:number):IE;
}

export interface IE{
    tick():void;
}

export interface IG extends IE,IC{
    play():void;
}

export interface IObj{
    [key:string]:number|string|boolean|object|Array<number>;
}

// 接口继承类
export interface IH extends F{
    getSum():void;
}