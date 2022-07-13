import Model from "./Model.js";

// import Model from "./Model";

export default class Ajax{
    constructor(){
        var xhr=new XMLHttpRequest();
        xhr.open("GET","http://localhost:4020");
        xhr.addEventListener("load",e=>this.loadHandler(e));
        xhr.send()
    }
    loadHandler(e){
        // 获得数据
       var xhr=e.currentTarget;
       var list=JSON.parse(xhr.response);
       Model.getInstance().data=list;//将数据塞入单例list中
    }
}