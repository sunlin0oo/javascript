import TimeManager, { IUpdate } from "./TimeManager";

export default class Rect implements IUpdate
{
    // 拿到canvas
    private canvas:HTMLCanvasElement;
    private ctx?:CanvasRenderingContext2D;
    private _x:number=0;
    private _y:number=0;
    private _color:string="black";
    // 控制渲染次数
    private bool:boolean=false;
    static readonly WIDTH:number=50;
    static readonly HEIGHT:number=50;
    public speedX:number=2;
    public speedY:number=2;
    // 从外部带入canvas，防止多次产生
    constructor(canvas:HTMLCanvasElement){
        this.canvas=canvas;
        this.ctx=this.canvas.getContext("2d") as CanvasRenderingContext2D;
        TimeManager.instance.add(this);
    }
    // 设置初始位置_x,_y 
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
        // (this.ctx as CanvasRenderingContext2D).fillStyle=this.color;
        // ?:作用是 如果存在this.ctx，才会进行执行，没有则不执行
        // this.ctx?.fillRect(this.x,this.y,Rect.WIDTH,Rect.HEIGHT);
        // 利用Promise对渲染进行一次调用
        if(this.bool) return;
        this.bool=true;
        Promise.resolve().then(()=>{
            this.bool=false;
            (this.ctx as CanvasRenderingContext2D).fillStyle=this.color;
            this.ctx?.fillRect(this.x,this.y,Rect.WIDTH,Rect.HEIGHT);
        })
    }

    public update():void
    {
        // 碰到边界反弹
        if(this.x<0 || this.x>this.canvas.width-Rect.WIDTH) this.speedX=-this.speedX;
        if(this.y<0 || this.y>this.canvas.height-Rect.HEIGHT) this.speedY=-this.speedY;
        this.x+=this.speedX;
        this.y+=this.speedY;
    }
}