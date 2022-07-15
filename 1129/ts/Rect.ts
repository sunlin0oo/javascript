import TimeManager, { IUpdate } from "./TimeManager";

export default class Rect implements IUpdate
{
    private canvas:HTMLCanvasElement;
    private ctx?:CanvasRenderingContext2D;
    private _x:number=0;
    private _y:number=0;
    private _color:string="black";
    private bool:boolean=false;
    static readonly WIDTH:number=50;
    static readonly HEIGHT:number=50;
    public speedX:number=2;
    public speedY:number=2;
    
    constructor(canvas:HTMLCanvasElement){
        this.canvas=canvas;
        this.ctx=this.canvas.getContext("2d") as CanvasRenderingContext2D;
        TimeManager.instance.add(this);
    }
    public set x(v:number){
        this._x=v;
        this.drawRect();
    }
    public get x():number
    {
       return this._x
    }

    public set y(v:number){
        this._y=v;
        this.drawRect();
    }
    public get y():number
    {
       return this._y
    }

    public set color(c:string){
        this._color=c;
        this.drawRect();
    }
    public get color():string
    {
        return this._color;
    }

    private  drawRect(){
        (this.ctx as CanvasRenderingContext2D).fillStyle=this.color;
        this.ctx?.fillRect(this.x,this.y,Rect.WIDTH,Rect.HEIGHT);
        // if(this.bool) return;
        // this.bool=true;
        // Promise.resolve().then(()=>{
        //     this.bool=false;
        //     (this.ctx as CanvasRenderingContext2D).fillStyle=this.color;
        //     this.ctx?.fillRect(this.x,this.y,Rect.WIDTH,Rect.HEIGHT);
        // })
    }

    public update():void
    {
        if(this.x<0 || this.x>this.canvas.width-Rect.WIDTH) this.speedX=-this.speedX;
        if(this.y<0 || this.y>this.canvas.height-Rect.HEIGHT) this.speedY=-this.speedY;
        this.x+=this.speedX;
        this.y+=this.speedY;
    }
}