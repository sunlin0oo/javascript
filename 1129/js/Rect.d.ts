import { IUpdate } from "./TimeManager";
export default class Rect implements IUpdate {
    private canvas;
    private ctx?;
    private _x;
    private _y;
    private _color;
    private bool;
    static readonly WIDTH: number;
    static readonly HEIGHT: number;
    speedX: number;
    speedY: number;
    constructor(canvas: HTMLCanvasElement);
    set x(v: number);
    get x(): number;
    set y(v: number);
    get y(): number;
    set color(c: string);
    get color(): string;
    private drawRect;
    update(): void;
}
//# sourceMappingURL=Rect.d.ts.map