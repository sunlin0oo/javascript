import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import App from './routes/App';
import Film from './routes/Film'
import Cinema from './routes/Cinema';
import Center from './routes/Center';
import Detail from './routes/Detail';
import Login from './routes/Login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* 登录页面写在前面 */}
      <Route path={'/login'} component={Login}></Route>
        {/* 这是一级路由==>可以进行控制 */}
        <Route path="/" render={()=>
          <App>
            {/* 这是二级路由 */}
              <Switch>
                <Route path='/film' component={Film}></Route>
                <Route path='/cinema' component={Cinema}></Route>
                {/* <Route path='/center' component={Center}></Route> */}
                {/* 路由拦截: render回调函数 渲染Center页面  可以书写逻辑,进行路由的拦截 */}
                <Route path='/center' render={()=>localStorage.getItem('token')?<Center></Center> : <Redirect to='/login'></Redirect>}></Route>

                {/* 动态路由==>myid是占位符 */}
                <Route path='/detail/:myid' component={Detail}></Route>
                <Redirect from='/' to='/film'></Redirect>
              </Switch>
          </App>
        } />
      </Switch>
    </Router>
  );
}
/** 问题: 为什么这里不可以这样进行表示
 * <Route path="/" render={()=>{
          <App></App>
    }} />
*/

export default RouterConfig;
