/* eslint-disable import/no-anonymous-default-export */
// c?:boolean可选传参
function test1(a:string,b:number,c?:boolean){
     console.log(a,b);
     return [a,b]
}
let myname:Array<string|number> = test1('a',1);
console.log(myname);
//-------------------------------

interface IFunc{
    (a:string,b:number,c?:boolean):string//返回string
}

const myfunc2:IFunc = function test2(a:string,b:number,c?:boolean):string{
    console.log(a,b);
    return a
}

const myname2:string = myfunc2('a',1);
console.log(myname2);

interface IObj {
    name:string,
    age:number,
    show?:boolean,//可选属性
    getName:(name:string)=>string//返回string
}
const obj1:IObj = {
    name:"sunlin",
    age:100,
    show:true,
    getName:(name:string)=>{
        return name;
    }
}

console.log(obj1.getName('a'));
export default {}