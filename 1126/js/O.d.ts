import { IA, IB, IC, IE, IG, IH } from "./interface/IO";
export declare class A implements IA, IB {
    num: number;
    step: number;
    a(): void;
    b(): void;
}
export declare class B implements IB, IC {
    step: number;
    sum: number;
    b(): void;
    c(): void;
}
export declare class C implements IE {
    a: number;
    constructor(a: number);
    tick(): void;
}
export declare class D implements IE {
    b: number;
    constructor(b: number);
    tick(): void;
}
export declare class E implements IG {
    play(): void;
    tick(): void;
    sum: number;
    c(): void;
}
export declare class F {
    num: number;
    runTime(): void;
}
export declare class H implements IH {
    num: number;
    getSum(): void;
    runTime(): void;
}
//# sourceMappingURL=O.d.ts.map