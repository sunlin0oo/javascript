import React, { Component } from 'react'
import {HashRouter,Redirect,Route, Switch} from 'react-router-dom'
import Films from '../view/Films'
import Cinemas from '../view/Cinemas'
import Center from '../view/Center'
import NotFound from '../view/NotFound'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* location.hash获取 */}
        {/* view放置页面视图 */}
        <HashRouter>
            {/* 只渲染匹配到的第一个 */}
            <Switch>
                <Route path='/films' component={Films}/>
                <Route path='/cinemas' component={Cinemas}/>
                <Route path='/center' component={Center}/>
                {/* 重定向==>from='/'==>是模糊匹配==>若没有匹配的Router则会到 to 里面所展示的router
                ==>通过Switch组件进行处理每次刷新页面只会到/films的问题*/
                }
                {/* <Redirect from='/' to='/films'></Redirect> */}
                {/* 精确匹配 exact  如果路径只有  /   跳转到/home */}
                <Redirect from='/' to='/films' exact></Redirect>
                <Route component={NotFound}/>
            </Switch>
            
        </HashRouter>
      </div>
    )
  }
}

/**
 * films ==>Films
 * cinemas==>Cinemas
 * center==>Center
 */