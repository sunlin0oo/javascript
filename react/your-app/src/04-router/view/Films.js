import React from 'react'
import {HashRouter,NavLink,Redirect,Route, Switch} from 'react-router-dom'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import style from './css/film.module.css'
console.log("style::",style);
export default function Films() {
  return (
    // 可以通过字符串拼接，对类进行特殊处理
    <div className={style.active + 'aaaa'}>
      <div style={{height:"200px",background:"yellow"}}>大轮播</div>
      <ul>
        {/* 单页面的CSS是重复的，别的文件引入，即可直接使用 ,但是可能会重名，通过在CSS文件中添加module==>film.module.css
        来解决重名的问题，多使用id/class选择器，少用标签选择器*/}
        <li>
          <NavLink to='/films/nowplaying' activeClassName={style.active}>正在热映</NavLink>
        </li>
        <li>
        <NavLink to='/films/comingsoon' activeClassName={style.active}>即将上映</NavLink>
        </li>
      </ul>
      
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
