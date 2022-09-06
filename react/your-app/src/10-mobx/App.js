import React, { Component } from 'react'
import {observable,autorun} from 'mobx'

// 对于普通类型数据的监听
// let observableNumber = observable.box(10);
// let observableName = observable.box('sunlin');
// // autorun用于监听
// autorun(()=>{
//     // autorun 里面对什么数据类型监听，其对应的修改才会触发
//     console.log('Number改变',observableNumber.get());
// })
// // 第一次执行一次，之后每次改变(必须是相关的执行)也会执行;
// autorun(()=>{
//     // autorun 里面对什么数据类型监听，其对应的修改才会触发
//     console.log('Name改变',observableName.get());
// })
// setTimeout(()=>{
//     observableNumber.set(20);
// },1000);

// setTimeout(()=>{
//     observableName.set('sunzif')
// },3000);

// let myobj = observable.map({
//     name:"sunzif",
//     age:100
// })

let myobj = observable({
    name:"sunzif",
    age:100
})

autorun(()=>{
    console.log('对象的name属性改变了',myobj.name)
});
setTimeout(()=>{
    // 精准制导--相关的才会去执行
    // myobj.set('age',18);
    myobj.name = 'sunlin';
},3000);


export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
