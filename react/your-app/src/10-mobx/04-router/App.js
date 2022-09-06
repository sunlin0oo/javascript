import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import './view/css/App.css'
import store from './mobx/store'
import {autorun} from 'mobx'
export default class App extends Component {
  state = {
    isShow:false
  }
  // store.subsribe
  componentDidMount(){
    autorun(()=>{ 
      console.log(store.isTabbarShow);
      this.setState({
        isShow:store.isTabbarShow
      })
    })
  }

  render() {
    return (
      <div>
            <MRouter>
              {/* 前者是true的话执行后者 */}
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