import React, { Component } from 'react'
// HashRouter as Router  将HashRouter重命名为Router;改成BrowserRouter就不需要一直改标签
// BrowserRouter 没有#路径;是真正朝后端发送请求页面，后端没有对应的路径处理路径，就会404;
import {HashRouter as Router,Redirect,Route, Switch} from 'react-router-dom'//将HashRouter替换成BrowserRouter可以去掉路由的#
import Films from '../view/Films'
import Cinemas from '../view/Cinemas'
import Center from '../view/Center'
import NotFound from '../view/NotFound'
import Detail from '../view/Detail'
import Login from '../view/Login'
import City from '../view/City'
import Search from '../view/search'
// import Nowplaying from '../view/Nowplaying'

function isAuth(){
    return localStorage.getItem('token');
}
export default class App extends Component {
  render() {
    return (
      <div>
        {/* location.hash获取 */}
        {/* view放置页面视图 */}
        <Router>
          {/* 留插槽，让Tabbar组件插入 */}
          {this.props.children}
            {/* 只渲染匹配到的第一个 */}
            <Switch>
              {/* 做嵌套路由 不要进行精确匹配 */}
                <Route path='/films' component={Films} />
                {/* 这里写二级路由的话，只会进行覆盖，因为这两个路由Nowplaying与 films 是兄弟关系，而不是父子关系*/}
                {/* <Route path='/films/nowplaying' component={Nowplaying}/> */}
                <Route path='/cinemas' component={Cinemas} exact/>
                <Route path='/cinemas/search' component={Search}/>
                {/*这里component属性写上将Center类传入  */}
                {/* <Route path='/center' component={Center}/> */}
                
                {/* render回调函数 渲染Center页面  可以书写逻辑,进行路由的拦截 */}
                {/* 这里只实例化<Center/> 而没有发送属性,没法使用history等属性方法;若要使用则需要添加参数propos就可以发送属性*/}
                <Route path='/center' render={(props)=>{
                  console.log("props:::",props);
                  return isAuth()?<Center myname='kerwin' {...props}/>:<Redirect to='/login'/>}}/>

                <Route path='/login' component={Login}/>

                {/* :myid 指 : 后面是模糊的  ==> 动态路由*/}
                <Route path='/detail/:myid' component={Detail}/>
                {/* query,state传参方式 是原先基本的Route写法 */}
                {/* <Route path='/detail' component={Detail}/> */}

                <Route path='/city' component={City}/>


                {/* 重定向==>from='/'==>是模糊匹配==>若没有匹配的Router则会到 to 里面所展示的router
                ==>通过Switch组件进行处理每次刷新页面只会到/films的问题*/
                }
                {/* <Redirect from='/' to='/films'></Redirect> */}
                {/* 精确匹配 exact  如果路径只有  /   跳转到/home */}
                <Redirect from='/' to='/films' exact></Redirect>
                <Route component={NotFound}/>
            </Switch>
            
        </Router>
      </div>
    )
  }
}

/**
 * films ==>Films
 * cinemas==>Cinemas
 * center==>Center
 */