import Utils from "./Utils.js";
import TimeManager from "./TimeManager.js";
export default class Carousel extends EventTarget{
    static cssBool=false;
    static SPEED=20;
    static CHANGE_IMAGE_EVENT="change_image_event";
    static LEFT=Symbol();
    static RIGHT=Symbol();
    list=[];
    imgCon;
    left;
    right;
    prev;
    first=0;
    x=0;
    iconDirection;
    constructor(list){
        super();
        this.elem = document.createElement("div");
        this.elem.className = "carousel";
        this.render();
        this.imgCon=this.elem.querySelector(".img-con");
        this.left=this.elem.querySelector(".left")
        this.right=this.elem.querySelector(".right")
        this.imgCon.addEventListener("mouseover",e=>this.mouseoverHandler(e));
        if(list) this.setData(list);
        Carousel.setCSS();
        this.left.addEventListener("click",e=>this.bnClickHandler(e));
        this.right.addEventListener("click",e=>this.bnClickHandler(e));
    }
    render(){
        this.elem.innerHTML=`<div class="left"></div>
        <div class="carousel-con">
            <div class="img-con">
            </div>
        </div>
        <div class="right"></div>`
    }
    setData(list){
        this.list=list;
        this.imgCon.innerHTML=list.reduce((value,item)=>{
            return value+`<img src='${item.icon}' id='${item.id}'>`
        },"")
        this.imgCon.style.width=list.length*76+"px";
        this.changeFirst();
       
    }
    changeFirst(){
        if(!this.imgCon.firstElementChild) return;
        var evt=new Event("mouseover",{bubbles:true});
        this.imgCon.firstElementChild.dispatchEvent(evt);
    }
    appendTo(parent) {
        if (typeof parent === "string") parent = document.querySelector(parent);
        if (parent) parent.appendChild(this.elem);
        this.changeFirst();
    }
    mouseoverHandler(e){
        if(e.target.nodeName!=="IMG")return;
        this.changePrev(e.target);
    }
    bnClickHandler(e){
        if(e.currentTarget===this.right && this.first+5!==this.list.length){
            this.first+=5;
            if(this.first+5>this.list.length-1)this.first=this.list.length-5;
            this.iconDirection=Carousel.LEFT;
        }else if(e.currentTarget===this.left && this.first!==0){
            this.first-=5;
            if(this.first<=0) this.first=0;
            this.iconDirection=Carousel.RIGHT;
        }else return;
      
        TimeManager.getInstance().add(this);
    }
    update(){
        if(this.iconDirection===Carousel.LEFT){
            this.x-=Carousel.SPEED
            if(this.x<=-this.first*76){
                this.x=-this.first*76;
                TimeManager.getInstance().remove(this);
            }
        }else if(this.iconDirection===Carousel.RIGHT){
            this.x+=Carousel.SPEED;
            if(this.x>=-this.first*76){
                this.x=-this.first*76;
                TimeManager.getInstance().remove(this);
            }
        }
        this.imgCon.style.left=this.x+"px";
    }
    changePrev(elem){
        if(this.prev){
            this.prev.style.borderColor="transparent"
        }
        this.prev=elem;
        this.prev.style.borderColor="#e53e41";
        this.dispatch(elem);
    }
    dispatch(elem){
        var evt=new Event(Carousel.CHANGE_IMAGE_EVENT);
        evt.ids=Number(elem.id);
        this.dispatchEvent(evt);
    }
    static setCSS(){
        if(Carousel.cssBool) return; 
        Carousel.cssBool=true;
        Utils.setCss(`
        .carousel{
            position: absolute;
            top: 464px;
            width: 452px;
            height: 58px;
        }
        .carousel>.left{
            width: 22px;
            height: 32px;
            background-image: url(./img/iphone/download.png);
            float: left;
            margin-top: 12px;
            position: relative;
        }
        .carousel>.right{
            width: 22px;
            height: 32px;
            background-image: url(./img/iphone/download-1.png);
            background-position: -78px 0;
            float: left;
            top: 12px;
            position: absolute;
            right: 0;
        }
        .carousel>.carousel-con{
            float: left;
            width: 380px;
            height: 58px;
            overflow: hidden;
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
        }
        .carousel>.carousel-con>.img-con
        {
            height: 58px;
            font-size: 0;
            left: 0;
            position: absolute;
        }
        .carousel>.carousel-con>.img-con>img{
            width: 54px;
            height: 54px;
            border: 2px solid transparent;
            margin: 0 9px;
        }
        `)
    }
}