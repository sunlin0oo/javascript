import { F } from "../O";
export interface IA {
    num: number;
    a(): void;
}
export interface IB {
    step: number;
    b(): void;
}
export interface IC {
    sum: number;
    c(): void;
}
export interface ID {
    new (n: number): IE;
}
export interface IE {
    tick(): void;
}
export interface IG extends IE, IC {
    play(): void;
}
export interface IObj {
    [key: string]: number | string | boolean | object | Array<number>;
}
export interface IH extends F {
    getSum(): void;
}
//# sourceMappingURL=IO.d.ts.map