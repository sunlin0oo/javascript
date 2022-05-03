import CheckBox from "./CheckBox.js";

export default class Radio extends CheckBox{
    static radioList = {}//对象
    constructor(label,name){
        super(label,name);

        // if(!Radio.radioList[name]) Radio.radioList[name] = [];//查看对象中是否有name是否利用，是跳过，否建立
        // /**satisfied: Array(1)
        //  *  Radio {name: 'satisfied', elem: div.checkbox_css.clear, checked: false, label: '非常满意'}
        //  * 然后再依次遍历
        // */
        // Radio.radioList[name].push(this);
        // // console.log(this);Radio {name: 'satisfied', elem: div.checkbox_css.clear, checked: false, label: '非常满意'}
        // console.log(Radio.radioList);


        this.setChecked(false);//规定初始值,改成了行内样式
    }

    setChecked(checked){
       super.setChecked(checked);
       //重写elem元素---继承的话都会拥有，在基础上进行修改
        //Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
        ////修改.checkbox_box的样式
       Object.assign(this.elem.firstElementChild.style,{
           width:"18px",
           height:"18px",
           backgroundPositionX:checked ?"-175px" : "-195px",
           backgroundPositionY:"-104px",
           marginTop:"2px",
       })
    }
    
    clickHandler(e){
        if(this.checked) return;
        // Radio.radioList[this.name].forEach(item => {
        //     if(item === this) return;//若遍历到要选中的元素，则跳过本次操作
        //     item.checked = false;
        //     item.setChecked(false);//让其他的都为false
        // });
        // this.name === "satisfied"
        if(Radio.radioList[this.name]){ // 判断上一次点击是否存在，存在的话，则设置为fasle;
            Radio.radioList[this.name].checked = false;
            Radio.radioList[this.name].setChecked(false);
        }
        Radio.radioList[this.name] = this;//将本次点击的设置到radioList列表中
        this.checked = true;//让当前的为true
        this.setChecked(true);
        this.dispatch();
    }
}