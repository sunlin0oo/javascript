var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./TimeManager"], function (require, exports, TimeManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    TimeManager_1 = __importDefault(TimeManager_1);
    var canvas = document.querySelector("canvas");
    // ctx.strokeStyle="red";
    // ctx.strokeRect(50,50,50,50);
    // ctx.clearRect(75,75,50,50);
    // ctx.strokeStyle="red";
    // ctx.strokeRect(75,75,50,50);
    // ctx.clearRect(100,100,50,50);
    // ctx.strokeStyle="red";
    // ctx.strokeRect(100,100,50,50);
    TimeManager_1.default.instance.canvas = canvas;
    // var rect:Rect=new Rect(canvas);
    // rect.x=50;
    // rect.y=50;
    // rect.x=100;
    // rect.color="red";
    // document.addEventListener("click",clickHandler);
    // function clickHandler(e:MouseEvent){
    //     rect.x=200;
    //     rect.y=200;
    //     rect.color="blue"
    // }
    // for(var i=0;i<1000;i++){
    //     var rect:Rect=new Rect(canvas);
    //     rect.x=Math.random()*(1200-50);
    //     rect.y=Math.random()*(400-50);
    //     rect.color=Array(6).fill(1).reduce((v:string)=>v+Math.floor(Math.random()*16).toString(16),"#");
    //     rect.speedX=Math.random()*10-5
    //     rect.speedY=Math.random()*10-5
    // }
    var ctx = canvas.getContext("2d");
    // 设置填充色
    // ctx.fillStyle="red";
    // 设置透明度
    // ctx.globalAlpha=0.5;
    // 设置线条色
    // ctx.strokeStyle="red";
    // ctx.fillRect(50,50,50,50);
    // var rect:Rect=new Rect(canvas);
    // 线性渐变
    // var fill:CanvasGradient=ctx.createLinearGradient(0,0,0,100);
    // fill.addColorStop(0,"red");
    // fill.addColorStop(1,"yellow");
    // ctx.fillStyle=fill;
    // ctx.fillRect(0,0,100,100);
    // ctx.strokeStyle=fill;
    // ctx.strokeRect(0,0,100,100);
    // 径向渐变
    // var fill:CanvasGradient=ctx.createRadialGradient(50,50,0,50,50,50);
    // fill.addColorStop(0,"red");
    // fill.addColorStop(1,"yellow");
    // ctx.fillStyle=fill;
    // ctx.fillRect(0,0,100,100);
    // var fill:CanvasGradient=ctx.createRadialGradient(75,25,0,75,25,50);
    // fill.addColorStop(0,"#FFFFFF");
    // fill.addColorStop(1,"red");
    // ctx.fillStyle=fill;
    // ctx.beginPath();
    // ctx.arc(50,50,50,0,Math.PI/180*360);
    // ctx.fill();
    // var fill:CanvasGradient=ctx.createRadialGradient(50,50,25,50,50,50);
    // fill.addColorStop(0,"#000");
    // fill.addColorStop(0.13,"#F00");
    // fill.addColorStop(0.26,"#FF0");
    // fill.addColorStop(0.39,"#0F0");
    // fill.addColorStop(0.52,"#0FF");
    // fill.addColorStop(0.65,"#00F");
    // fill.addColorStop(0.78,"#F0F");
    // fill.addColorStop(0.91,"#F00");
    // fill.addColorStop(1,"red");
    // ctx.fillStyle=fill;
    // ctx.beginPath();
    // ctx.arc(50,50,50,0,Math.PI/180*180,true);
    // ctx.fill();
    // ctx.strokeStyle=fill;
    // ctx.strokeRect(0,0,100,100);
    // var img:HTMLImageElement=new Image();
    // img.src="../img/4-.jpg";
    // img.addEventListener("load",loadHandler);
    // function loadHandler(this:HTMLImageElement,e:Event):void
    // {
    //     var fill:CanvasPattern=ctx.createPattern(this,"repeat") as CanvasPattern;
    //     ctx.fillStyle=fill;
    //     ctx.fillRect(300,100,300,300);
    // }
    // ctx.shadowBlur=3;
    // ctx.shadowOffsetX=4;
    // ctx.shadowOffsetY=4;
    // ctx.shadowColor="#FFF";
    // ctx.fillStyle="red";
    // ctx.fillRect(50,50,100,100);
    // ctx.lineWidth=10.5;
    // ctx.strokeStyle="red";
    // ctx.strokeRect(50,50,100,100);
    // ctx.strokeStyle="red";
    // ctx.strokeRect(160.5,50,100,100);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 100, 100);
    ctx.fillRect(100, 0, 100, 100);
});
//# sourceMappingURL=Main.js.map