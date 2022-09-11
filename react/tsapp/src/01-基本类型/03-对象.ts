/* eslint-disable import/no-anonymous-default-export */
// 会在写的时候就进行错误的检查
//对象存在接口的概念
interface IObj {
    name:string,
    age:number,
    show?:boolean,//可选属性
    [propName:string]:any//属性名字是string，类型是任意的,存储一些不在的属性
}
const obj1:IObj = {
    name:"sunlin",
    age:100,
    show:true,
    sd:100,
    sda:'sunzif',
    sdada:true
}
console.log(obj1.name);
export default {}