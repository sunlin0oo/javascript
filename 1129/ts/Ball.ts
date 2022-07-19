import TimeManager, { IUpdate } from "./TimeManager";

export default class Ball implements IUpdate{
    elem:HTMLElement;
    x:number=0;
    constructor(y:number){
        this.elem=document.createElement("div");
        // 设置样式
        Object.assign(this.elem.style,{
            width:"50px",
            height:"50px",
            backgroundColor:"red",
            position:"absolute",
            left:"0px",
            top:y+"px",
        } as CSSStyleDeclaration)
    }
    // 将元素添加到页面上
    public appendTo(parent:string|HTMLElement):void
    {
        if(typeof parent==="string") parent=document.querySelector(parent) as HTMLElement;
        if(parent) parent.appendChild(this.elem);
        // TimeManager.instance调用get，返回一个 TimeManager实例
        TimeManager.instance.add(this);
        this.elem.addEventListener("click",(e:MouseEvent)=>this.clickHandler(e));
    }

    public update():void
    {
        this.x++;
        this.elem.style.left=this.x+"px";
    }

    private clickHandler(e:MouseEvent):void
    {
        TimeManager.instance.remove(this);
        this.elem.remove();
    }

}