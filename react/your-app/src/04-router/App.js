import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import './view/css/App.css'

export default class App extends Component {
  // store.subsribe
  render() {
    return (
      <div>
        {/* 指首页 */}
            <MRouter>
              <Tabbar></Tabbar>
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