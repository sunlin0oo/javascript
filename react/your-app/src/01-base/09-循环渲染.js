import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list:[{
                    id:1,
                    text:"1111"
                },{
                    id:2,
                    text:"2222"
                },{
                    id:3,
                    text:"3333"
                },{
                    id:4,
                    text:"4444"
                },]
    }
  render() {
    // 设置key值：为了列表的复用和重排，提高性能==>id是唯一的==> key 不是全局唯一的。它们只能指定 父组件内部 的顺序。
    let newlist = this.state.list.map(item=><li key={item.id}>{item.text}</li>);
    return (
      <div>
        <ul>
            {
                // this.state.list.map(item=>`<li>${item}<li>`) 不要加``;将其转换成js的地盘进行编写==>加上{}，一个是编写环境，另外一个是变量{item}
               newlist
            }
        </ul>
      </div>
    )
  }
}
/**
 * 原生js-Map
 */

// var list = ["a","b","c"];

// var newlist = list.map(item=>`<li>${item}<li>`);
// console.log(newlist.join(""));