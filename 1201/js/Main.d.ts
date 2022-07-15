declare var canvas: HTMLCanvasElement;
declare var ctx: CanvasRenderingContext2D;
declare var imgList: Array<HTMLImageElement>;
declare var arr: Set<{
    x: number;
    y: number;
}>;
declare const width = 300, height = 200;
declare function loadImage(src: string): Promise<HTMLImageElement>;
declare function init(): Promise<void>;
declare function mouseHandler(e: MouseEvent): void;
//# sourceMappingURL=Main.d.ts.map