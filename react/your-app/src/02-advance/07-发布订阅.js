import React, { Component } from 'react'

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
    // 订阅--callback回调函数
    subscribe(callback){
        console.log(callback);
        this.list.push(callback);
    },
    //发布
    publish(value){
        //遍历所有的list，将回调函数执行
        this.list.forEach(callback=>{
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