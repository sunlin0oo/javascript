import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'

export default class App extends Component {
  render() {
    return (
      <div>
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