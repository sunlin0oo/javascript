import React, { Component } from 'react'
// 需要安装上说明文档
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'

import Film from '../views/Film'
import Cinema from '../views/Cinema'
import Center from '../views/Center'
import Detail from '../views/Detail'
// 这里是路由的总控室
export default class IndexRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
            <Route path='/film' component={Film}></Route>
        <Route path='/cinema' component={Cinema}></Route>
        <Route path='/center' component={Center}></Route>
        {/* myid相当于是占位符 */}
        <Route path='/detail/:myid' component={Detail}></Route>


        {/* 模糊匹配没有停止会导致一刷新就到film,采用Switch进行处理 */}
        <Redirect from='/' to='/film'></Redirect>
        </Switch>
        
      </HashRouter>
    )
  }
}
