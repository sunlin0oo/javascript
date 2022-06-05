import A from "./A.js";//没有的话需要补足.js！！！

export default class B extends A{
    constructor(name,age){
        super(name);
        this.age=age;
    }
    run(){
        console.log("run")
    }
}