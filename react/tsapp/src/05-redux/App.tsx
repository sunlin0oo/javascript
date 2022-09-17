import React, { Component } from 'react'
import store from './redux/store'
import IndexRouter from './router/index'
export default class App extends Component {
  state = {
    isShow:store.getState().isShow
  }
  // 订阅者  接收者是Detail
  componentDidMount(): void {
    console.log('我执行了')
    store.subscribe(()=>{
      console.log('store.getState()::', store.getState())
      this.setState({
        isShow:store.getState().isShow
      })
    })
  }
  render() {
    return (
      <div>
        {/* 引入路由组件 */}
        <IndexRouter></IndexRouter>

        {this.state.isShow && <ul>
          <li>电影</li> 
          <li>影院</li>
          <li>我的</li>
        </ul>}
      </div>
    )
  }
}
