import React from 'react'
import {HashRouter,Redirect,Route, Switch} from 'react-router-dom'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
export default function Films() {
  return (
    <div>
      <div style={{height:"200px",background:"yellow"}}>大轮播</div>
      <div>导航栏</div>
      
      {/*路由配置，嵌套路由 */}
      <Switch>
        {/* 是Route的儿子，可以获取一些功能获取props对象等 */}
        <Route path='/films/nowplaying' component={Nowplaying}/>
        <Route path='/films/comingsoon' component={Comingsoon}/>
        <Redirect from='/films' to='/films/nowplaying' exact></Redirect>
      </Switch>
      
    </div>
  )
}
