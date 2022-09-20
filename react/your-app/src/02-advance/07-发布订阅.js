import React, { Component } from 'react'
// 父组件
export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

//调度中心
var bus = {
    list :[],
    // 订阅得函数--callback回调函数
    subscribe(callback){
        console.log(callback);
        // 将两个订阅得函数推到list数组中
        this.list.push(callback);
    },
    //发布的函数
    publish(value){
        //遍历所有的list，将回调函数执行
        this.list.forEach(callback=>{
            // 判断callback是否存在，存在的话执行 callback(value)
            callback && callback(value)
        })
    }
}

bus.subscribe((value)=>{
    console.log("1111111",value)
})

bus.subscribe((value)=>{
    console.log("2222222",value)
})
setTimeout(()=>{
    bus.publish("weda");
},0)