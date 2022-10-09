import React, { Component } from 'react'
import Tabbar from '../components/Tabbar'

export default class App extends Component {
  render() {
    return (
      <div>
        App
        {/* 留下这个插槽的作用是为了避免替换大组件导致路由丢失==>4:05-4:15 */}
        {this.props.children}
        <Tabbar></Tabbar>
        </div>
    )
  }
}
