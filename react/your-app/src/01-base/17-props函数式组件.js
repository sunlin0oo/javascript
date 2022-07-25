import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
import Siderbar from './Siderbar'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 类组件 */}
        <Navbar title="导航"></Navbar>
        {/* 函数式组件 */}
        <Siderbar bg = 'yellow' position = "right"></Siderbar>
      </div>
    )
  }
}
