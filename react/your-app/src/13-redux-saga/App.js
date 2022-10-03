import React, { Component } from 'react'
import './01-生成器函数'
import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>{
            if(store.getState().list1.length === 0){
            // dispatch
            store.dispatch({
              type:'get-list1'
            })
            }else{
              console.log('缓存',store.getState().list1)
            }
          }
        }>Click-ajax-异步缓存</button>
      </div>
    )
  }
}
