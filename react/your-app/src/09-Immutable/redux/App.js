import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import { show } from './redux/actionCreator/TabbaractionCreator'
import store from './redux/store'
import MRouter from './router/IndexRouter'
import './view/css/App.css'

export default class App extends Component {
  state = {
    // isShow:store.getState(),
    // isShow:store.getState().TabbarReducer
    isShow:store.getState().TabbarReducer.get('show')
  }
  // store.subsribe  订阅

  componentDidMount(){
    store.subscribe(()=>{
      // 通过store.getState()获取最新状态
      // console.log('app订阅',store.getState());
      // console.log('app订阅',store.getState().TabbarReducer);
      this.setState({
        // isShow:store.getState().show,
        // isShow:store.getState().TabbarReducer.show,//undefined
        isShow:store.getState().TabbarReducer.get('show')
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