import { IUpdate } from "./TimeManager";
export default class Line implements IUpdate {
    private canvas;
    private ctx;
    private arr;
    private currentPoint;
    private x;
    private y;
    private speed;
    private speedX;
    private speedY;
    constructor(canvas: HTMLCanvasElement);
    update(): void;
}
//# sourceMappingURL=Line.d.ts.map