import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import store from './redux/store'
import MRouter from './router/IndexRouter'
import './view/css/App.css'
/**  Flex是一个管理框架思想，redux是思想的实现
 * 工作流:组件状态要改动==>发送 action(createAction)==dispatch==>发送到store中，在store中通过reducer(新老状态比较)进行状态更新==>通知相关组件进行更新 
*/
export default class App extends Component {
  state = {
    // isShow:store.getState(),
    isShow:store.getState().TabbarReducer
  }
  // store.subsribe  订阅

  componentDidMount(){
    store.subscribe(()=>{
      // 通过store.getState()获取最新状态
      // console.log('app订阅',store.getState());
      console.log('app订阅',store.getState().TabbarReducer);
      this.setState({
        // isShow:store.getState().show,
        isShow:store.getState().TabbarReducer.show,
      })
    })
  }

  render() {
    return (
      <div>
            <MRouter> 
              {/* 如果进入详细界面则会隐藏导航栏 */}
              {this.state.isShow && <Tabbar></Tabbar>}
            </MRouter>

      </div>
    )
  }
}

/**
 * films ==>Films
 * cinemas==>Cinemas
 * center==>Center
 */