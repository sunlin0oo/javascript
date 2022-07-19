import TimeManager from "./TimeManager";

export function clearCanvas(thisArg:TimeManager){
    return function(target:TimeManager,key:string,desc:PropertyDescriptor){
        var method:Function=desc.value;
        desc.value=function(){
            if(thisArg.canvas){
                var ctx:CanvasRenderingContext2D=thisArg.canvas.getContext("2d") as CanvasRenderingContext2D;
                // ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
                ctx.fillStyle="#FFFFFF";
                ctx.globalAlpha=0.1
                ctx.fillRect(0,0,thisArg.canvas.width,thisArg.canvas.height);
                ctx.globalAlpha=1;
            }
           return  method.apply(thisArg)
        }
    }
}  