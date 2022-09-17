import React, { Component } from 'react'
import IndexRouter from './router/index'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 引入路由组件 */}
        <IndexRouter></IndexRouter>
      </div>
    )
  }
}
