import React, { Component } from 'react'
import {List} from 'immutable'
// 数组用List
let arr = List([1,2,3]);
let arr2 = arr.push(4) //不会影响老的对象结构
let arr3 = arr.concat([5,6,7]);//不会影响老的对象结构
console.log(arr.toJS(),arr2.toJS(),arr3.toJS());
export default class App extends Component {
    state = {
        favor:List(['aaa','bbb','ccc']),
    }
  render() {
    return (
      <div>
        {
            this.state.favor.map(item=>(
                <li key={item}>{item}</li>
            ))
        }
      </div>
    )
  }
}
