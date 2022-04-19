import Utils from "./Utils.js";
export default class CheckBox extends EventTarget{  //导出模块
    name;
    elem;
    checked=false;
    label;
    static cssBool = false;
    static CHECKED_CHANGE_EVENT="checked_change_event";
    constructor(label,name){
        super()
        this.name = name;
        //创建主元素
        this.label = label;
        this.elem = document.createElement("div");
        this.elem.className  =  "checkbox_css clear";
        this.render(label);
        //
        //侦听主元素
        this.elem.addEventListener("click",e=>this.clickHandler(e));
        if(CheckBox.cssBool) return;
        CheckBox.setCss();
        CheckBox.cssBool = true;
    }
    appendTo(parent){
        //若输入的是字符串，则通过querySelector获取到dom元素
        if(typeof parent === "string") parent = document.querySelector(parent);
        if(parent) parent.appendChild(this.elem);//往父元素里面添加this.elem
    }
    //针对主元素做里面的子元素
    render(label){
        //放入elem元素
        this.elem.innerHTML = `
            <div class='checkbox_box' ></div>
            <span class='checkbox_label'>${label}</span>
        `;
    }
    clickHandler(e){
        // console.log("clickHandler中",this);--->div框
        this.checked =! this.checked;
        this.setChecked(this.checked);
        this.dispatch()
    }

    setChecked(checked){
        if(checked){
            this.elem.setAttribute("active","");//增加""acitve"为空
        }else{
            this.elem.removeAttribute("active");
        }
    }
    dispatch(){
        var evt = new Event(CheckBox.CHECKED_CHANGE_EVENT);//执行事件
        evt.checked = this.checked;
        evt.name = this.name;
        evt.label = this.label;
        this.dispatchEvent(evt);//抛发
    }
    //设置CSS
    static setCss() {
        Utils.setCss(`
        .checkbox_css{
            padding: 5px 5px;
            float: left;
        }
        .checkbox_css.clear::after{
            content: "";
            display: block;
            visibility: hidden;
            clear: both;
            height: 0;
            overflow: hidden;
        }
        .checkbox_css>.checkbox_box{
            width: 14px;
            height: 14px;
            background-image: url(./img/new_icon.png);
            background-position-x: -238px;
            background-position-y: -37px;
            float: left;
            margin-top: 4px;
        }
        .checkbox_css[active]>.checkbox_box{
            background-position-x: -128px;
            background-position-y: -126px;
        }
        .checkbox_css>.checkbox_label{
            float: left;
            margin-left: 5px;
            user-select: none;
        }
        `)
    }
}