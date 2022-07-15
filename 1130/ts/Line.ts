import TimeManager, { IUpdate } from "./TimeManager";

export default class Line implements IUpdate
{
    private canvas:HTMLCanvasElement;
    private ctx:CanvasRenderingContext2D;
    private arr:Array<Array<number>>=[[50,50],[150,50],[150,100],[250,100],[250,150],[200,150],[200,200],[50,50]];
    private currentPoint:Array<number>;
    private x:number;
    private y:number;
    private speed:number=100;
    private speedX:number=0;
    private speedY:number=0;
    constructor(canvas:HTMLCanvasElement){
        this.canvas=canvas;
        this.ctx=canvas.getContext("2d") as CanvasRenderingContext2D;
        this.arr=this.arr.reverse();
        this.currentPoint=this.arr.pop() as Array<number>;
        this.ctx.beginPath();
        this.ctx.moveTo(this.currentPoint[0],this.currentPoint[1]);
        this.x=this.currentPoint[0];
        this.y=this.currentPoint[1];
        TimeManager.instance.add(this);
    }
    public update():void
    {
        if(this.x===this.currentPoint[0] && this.y===this.currentPoint[1]){
            this.currentPoint=this.arr.pop() as Array<number>;
            if(!this.currentPoint){
                TimeManager.instance.remove(this);
                return;
            }
            this.speedX=(this.currentPoint[0]-this.x)/this.speed;
            this.speedY=(this.currentPoint[1]-this.y)/this.speed;
        }
        this.x+=this.speedX;
        this.y+=this.speedY;
        this.ctx.lineTo(this.x,this.y);
        this.ctx.stroke();
    }
}