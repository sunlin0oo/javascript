import React, { Component } from 'react'
import {HashRouter,Redirect,Route, Switch} from 'react-router-dom'
import Films from '../view/Films'
import Cinemas from '../view/Cinemas'
import Center from '../view/Center'
import NotFound from '../view/NotFound'
// import Nowplaying from '../view/Nowplaying'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* location.hash获取 */}
        {/* view放置页面视图 */}
        <HashRouter>
          {/* 留插槽，让Tabbar组件插入 */}
          {this.props.children}
            {/* 只渲染匹配到的第一个 */}
            <Switch>
              {/* 做嵌套路由 不要进行精确匹配 */}
                <Route path='/films' component={Films} />
                {/* 这里写二级路由的话，只会进行覆盖，因为这两个路由是兄弟关系，而不是父子关系*/}
                {/* <Route path='/films/nowplaying' component={Nowplaying}/> */}
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