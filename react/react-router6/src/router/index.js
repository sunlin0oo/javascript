import React from 'react'
import { useRoutes } from 'react-router-dom'
import Redirect from '../components/Redirect';
export default function MRouter() {
  // useRoutes 会根据数组生成结构
  const element = useRoutes([
    {
      path: '/films',
      element: Lazyload('Film'),
      children: [
        {
          path: '',
          element: <Redirect to='/films/nowplaying'></Redirect>
        },
        {
          path: 'nowplaying',
          element: Lazyload('films/Nowplaying')
        },
        {
          path: 'comingsoon',
          element: Lazyload('films/Comingsoon')
        },
      ]
    },
    {
      path: '/cinemas',
      element: Lazyload('Cinema')
    },
    {
      path: '/notfound',
      element: Lazyload('NotFound')
    },
    {
      path: '/login',
      element: Lazyload('Login')
    },
    {
      path: '/centers',
      element: <AuthComponent>{Lazyload('Center')}</AuthComponent>
    },
    {
      path: '/detail/:myid',
      element: Lazyload('Detail_dongtai')
    },
    {
      path: '/',
      element:<Redirect to='/films'></Redirect>
    },
    {
      path: '*',
      element: Lazyload('Notfound')
    },
    
  ])
return (
  element
)
}
// function isAuth(){
//     return localStorage.getItem('token');
// }

// 路由拦截组件的封装
function AuthComponent({ children }) {
  const isLogin = localStorage.getItem('token');
  return isLogin ? children : <Redirect to='/login'></Redirect>;
}
// 路由懒加载的封装==>解决第一次加载过慢的情况
const Lazyload = (path) => {
  const Comp = React.lazy(() => import(`../view/${path}`));
  return (
    <React.Suspense fallback={<>加载中...</>}>
      <Comp></Comp>
    </React.Suspense>
  )
}