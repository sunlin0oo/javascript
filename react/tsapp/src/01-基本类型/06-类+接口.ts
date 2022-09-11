// 接口==>约束形状，规范行为
interface IFunc{
    getName:()=>string,
}

//连接关系：定义类 实现接口

// 类
class B implements IFunc{
    b1(){

    }

    b2(){

    }
    
    getName(){
        return 'bbb'
    }
}
class A implements IFunc{
    a1(){}
    a2(){}
    getName(){
        return 'aaa'
    }
}

class C implements IFunc{
    getName(){
        return 'ccc'
    }
}
// 这样会对类进行检查，是否符合接口
function init(obj:IFunc){
    obj.getName();
}

const objA = new A();
const objB = new B();
const objC = new C();

init(objA);
init(objB);
// init(objC);//会对obj进行接口的检查，说C类中缺少属性

export default {}