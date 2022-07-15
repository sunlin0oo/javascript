export interface IBindFun {
    (this: HTMLCanvasElement, evt: MouseEvent): void;
}
export default class Write {
    private canvas;
    private ctx;
    private mouseBind;
    private widthCount;
    private widthBottom;
    private readonly lineWidth;
    private readonly Gap;
    private lineWidthList;
    private widthValue;
    private lineColor;
    eraser: boolean;
    private colorArr;
    constructor(canvas: HTMLCanvasElement);
    private drawBn;
    private getPoint;
    private mouseHandler;
    private clickHandler;
    private hitTest;
    private drawRectWidth;
    private drawRectColor;
    clear(): void;
}
//# sourceMappingURL=Write.d.ts.map