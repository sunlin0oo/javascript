import IUpdate from "./interface/IUpdate";

export default class Rect implements IUpdate{
    elem:HTMLDivElement
    y:number=0;
    constructor(){
        // 创建div
        this.elem=document.createElement("div");
        // 设置样式--通过断言说明对象类型(CSSStyleDeclaration))
        Object.assign(this.elem.style,{
            width:"50px",
            height:"50px",
            position:"absolute",
            backgroundColor:"yellow"
        } as CSSStyleDeclaration)
    }

    appendTo(parent:string|HTMLElement):void
    {
        if(typeof parent==="string") parent=document.querySelector(parent) as HTMLElement;
        if(parent instanceof HTMLElement) parent.appendChild(this.elem);
    }
    update(){
        this.y++;
        this.elem.style.top=this.y+"px";
    }
}