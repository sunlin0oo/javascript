import React, { Component } from 'react'
// 引用复制（浅复制）
// let obj = {
//     name:"sunlin",
// }
// let obj2 = obj;
// obj2.name = "sunzifeng";//引用地址相同一块进行改变

//比浅复制多复制了一层
// 简单的一层可以用 ... 一层进行处理
// let obj = {
//     name:"sunlin",
//     // 如果多了一层
//     arr:[1,2,3]
// }
// let obj2 ={
//     ...obj,
//     }
// obj2.name = "sunzifeng";//两者name不受影响
// obj2.arr.splice(1,1);//两者的arr属性会受到影响
// json-parse json-stringify--深复制-- 不能复制(有)undefined
let obj = {
    name:"sunlin",
    // 如果多了一层
    arr:[1,2,3],
    address:undefined,
}
let obj2 =JSON.parse(JSON.stringify(obj));
obj2.name = "sunzifeng";//两者不受影响
obj2.arr.splice(1,1);//两者不受影响
// 但是不能复制undefined字段
console.log(obj,obj2);
// deepcopy--递归深复制，性能不好，占用内存

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
