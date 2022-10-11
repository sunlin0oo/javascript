import { connect } from 'dva'
import React, { Component } from 'react'
import Tabbar from '../components/Tabbar'

class App extends Component {
  render() {
    return (
      <div>
        App
        {/* 留下这个插槽的作用是为了避免替换大组件导致路由丢失==>4:05-4:15 */}
        {this.props.children}
        {this.props.isShow && <Tabbar></Tabbar>}
        </div>
    )
  }
}
//connect 高阶组件==>本质是为了做渲染挟持，属性注入==>将参数传给App
export default connect((state)=>{
  console.log(state)//可以根据命名空间拿到对应models中的信息
  return{
    // 需要根据命名空间进行选择
    isShow:state.maizuo.isShow
  }
})(App)
