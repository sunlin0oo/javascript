export interface IBindFun{
    (this:HTMLCanvasElement,evt:MouseEvent):void;
}

export default class Write{
    private canvas:HTMLCanvasElement;
    private ctx:CanvasRenderingContext2D;
    // private mouseBind:(this: HTMLCanvasElement, evt: MouseEvent) => void;
    private mouseBind:IBindFun;
    private widthCount=5;
    private widthBottom=20;
    private readonly lineWidth:number=50;
    private readonly Gap:number=10;
    private lineWidthList:Array<Array<number>>=[];
    private widthValue:number=1;
    private lineColor:string="black";
    public eraser:boolean=false;
    private colorArr:Array<string>=["#F00","#F90","#FF0","#0F0","#0F9","#0FF","#00F","#90F","#F0F"];
    constructor(canvas:HTMLCanvasElement){
        this.canvas=canvas;
        this.ctx=canvas.getContext("2d") as CanvasRenderingContext2D;
        this.mouseBind=(e:MouseEvent)=>this.mouseHandler(e);
        canvas.addEventListener("mousedown",this.mouseBind);
        canvas.addEventListener("click",(e:MouseEvent)=>this.clickHandler(e));
        this.drawBn();
    }
    private drawBn():void{
        var point:Array<number>
        for(var i=0;i<this.widthCount;i++){
            point=this.getPoint(i,this.widthBottom,this.widthCount);
            this.drawRectWidth(point[0],point[1],(i+1)*2);
            this.lineWidthList.push([point[0],point[1]]);
        }

        for(var j=0;j<this.colorArr.length;j++){
            point=this.getPoint(j-this.widthCount,this.widthBottom,this.colorArr.length);
            this.drawRectColor(point[0],point[1],this.colorArr[j]);
            this.lineWidthList.push([point[0],point[1]]);
        }
    }
    private getPoint(i:number,bottom:number,len:number):Array<number>
    {
        var x:number=this.canvas.width-(this.lineWidth+this.Gap)*(len-i);
        var y:number=this.canvas.height-bottom-this.lineWidth;
        return [x,y]
    }
    private mouseHandler(e:MouseEvent):void
    {
       if(e.offsetY>320) return;
        if(this.hitTest(e.offsetX,e.offsetY)!==-1){
            this.ctx.beginPath();
            return;
        }
        if(e.type==="mousedown"){
            this.ctx.beginPath();
            this.ctx.lineWidth=this.widthValue;
            this.ctx.strokeStyle=this.lineColor;
            this.ctx.moveTo(e.offsetX,e.offsetY);
            this.canvas.addEventListener("mousemove",this.mouseBind);
            this.canvas.addEventListener("mouseup",this.mouseBind);
            this.canvas.addEventListener("mouseleave",this.mouseBind);
        }else if(e.type==="mousemove"){
           if(!this.eraser){
            this.ctx.lineTo(e.offsetX,e.offsetY);
            this.ctx.stroke();
           }else{
               this.ctx.clearRect(e.offsetX-10,e.offsetY-10,20,20);
           }
        }else{
            this.canvas.removeEventListener("mousemove",this.mouseBind);
            this.canvas.removeEventListener("mouseup",this.mouseBind);
            this.canvas.removeEventListener("mouseleave",this.mouseBind);
        }
    }
    private clickHandler(e:MouseEvent):void
    {
        var value:number=this.hitTest(e.offsetX,e.offsetY);
        if(value<this.widthCount){
            this.widthValue=value || 1;
        }else{
            this.lineColor=this.colorArr[value-this.widthCount];
        }
      
    }

    private hitTest(x:number,y:number):number
    {
        for(var i=0;i<this.lineWidthList.length;i++){
            if(x>=this.lineWidthList[i][0] && x<=this.lineWidthList[i][0]+this.lineWidth && y>=this.lineWidthList[i][1] && y<=this.lineWidthList[i][1]+this.lineWidth){
                return i;
            }
        }
        return -1;
    }

    private drawRectWidth(x:number,y:number,w:number):void
    {
        this.ctx.strokeStyle="black";
        this.ctx.lineWidth=1;
        this.ctx.beginPath();
        this.ctx.strokeRect(x,y,this.lineWidth,this.lineWidth);
        this.ctx.lineWidth=w;
        this.ctx.moveTo(x+25,y+15);
        this.ctx.lineTo(x+25,y+35);
        this.ctx.stroke();
    }

    private drawRectColor(x:number,y:number,color:string):void
    {
        this.ctx.fillStyle=color;
        this.ctx.fillRect(x,y,this.lineWidth,this.lineWidth);
    }
    public clear():void
    {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.widthValue=1;
        this.lineColor="black";
        this.drawBn();
    }
}