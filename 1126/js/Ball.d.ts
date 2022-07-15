import IBall from "./interface/IBall";
export default class Ball implements IBall {
    width: number;
    height: number;
    readonly ID: string;
    constructor();
    run(): void;
    play(a: number, b: number): number;
    set num(v: number);
    get num(): number;
}
//# sourceMappingURL=Ball.d.ts.map