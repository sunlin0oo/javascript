import IUpdate from "./interface/IUpdate";

export default class Circle implements IUpdate{
    elem:HTMLDivElement
    x:number=0;
    constructor(){
        this.elem=document.createElement("div");
        Object.assign(this.elem.style,{
            width:"50px",
            height:"50px",
            borderRadius:"50px",
            position:"absolute",
            backgroundColor:"red"
        } as CSSStyleDeclaration)
    }

    appendTo(parent:string|HTMLElement):void
    {
        if(typeof parent==="string") parent=document.querySelector(parent) as HTMLElement;
        if(parent instanceof HTMLElement) parent.appendChild(this.elem);
    }
    update():void{
        this.x++;
        this.elem.style.left=this.x+"px";
    }
}