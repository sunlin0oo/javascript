import Ajax from "./Ajax.js";
import Box from "./Box.js";
import Model from "./Model.js";

export default class Main{
    constructor(){
        // 创建10个Box并且存到list中
        for(var i=0;i<10;i++){
            var box=new Box();
            box.appendTo("body");
            // 获取一个新的实例 
            Model.getInstance().add(box)
        }
        new Ajax();
        
    }
}