import { IA, IB, IC, ID, IE, IG, IH } from "./interface/IO";

export class A implements IA,IB
{
    num:number=1;
    step:number=2;
    a():void
    {

    }
    b():void
    {

    }
}

export class B implements IB,IC{
    step:number=3;
    sum:number=5;
    b():void
    {

    }
    c():void
    {

    }
}

export class C implements IE{
    a:number;
    constructor(a:number)
    {
        this.a=a;
    }
    tick():void{

    }
}
export class D implements IE{
    b:number;
    constructor(b:number)
    {
        this.b=b;
    }
    tick():void{

    }
}

export class E implements IG{
    play():void
    {

    }
    tick():void
    {

    }
    sum=1;
    c():void{
        
    }
}
export class F{
    num:number=1;
    runTime():void
    {
        console.log("aaa")
    }
}

export class H implements IH{
    num:number=2;
    getSum():void{

    }
    runTime():void{
        console.log("bbb")
    }
}
