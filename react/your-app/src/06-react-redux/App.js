import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import './view/css/App.css'

class App extends Component {
  // 直接由父组件进行发送this.props值进行接收

  // state = {
  //   // isShow:store.getState(),
  //   isShow:store.getState().TabbarReducer
  // }
  // // store.subsribe  订阅

  componentDidMount(){
    console.log("this.props::",this.props)
  }

  render() {
    return (
      <div>
            <MRouter> 
              {/* 如果进入详细界面则会隐藏导航栏 */}
              {this.props.isShow && <Tabbar></Tabbar>}
            </MRouter>

      </div>
    )
  }
}
// 映射状态到属性
const mapStateToProps = (state)=>{
  return{
    isShow:state.TabbarReducer.show,
  }
}
// (定制函数，往App上挂载属性)(App)
export default connect(mapStateToProps)(App)

/**
 * films ==>Films
 * cinemas==>Cinemas
 * center==>Center
 */

/**
 * 不使用订阅者dispatch及subscribe方法只使用connect方法：
 * ①在index中添加Provider,主要作用是绑定store
 * ②在App(订阅者)中 添加高阶组件connect
 * ③在Details(通知者)中，添加高阶组件connect
*/