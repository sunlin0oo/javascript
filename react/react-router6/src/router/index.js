import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Film from '../view/Film';
import Cinema from '../view/Cinema';
import Center from '../view/Center';
import Redirect from '../components/Redirect';
export default function MRouter() {
  return (
    <div>
         {/* Route 必须包裹在Routes中 */}
      <Routes>
        {/* 匹配父路径，设置渲染的组件 */}
        <Route index element={<Film></Film>}></Route>
        <Route path='/films' element={<Film></Film>}></Route>
        <Route path='/cinemas' element={<Cinema></Cinema>}></Route>
        <Route path='/centers' element={<Center></Center>}></Route>
        {/* 方案1:Navigate组件代替Redirect(重定向组件)==> * 用万能匹配，匹配不到到films */}
        {/* <Route path='*' element={<Navigate to='/films'></Navigate>}></Route> */}
        {/* 方案2:自己写一个重定向组件==>将要传的值(路由)以属性的形式传过去 */}
        <Route path='*' element={<Redirect to='/films'></Redirect>}></Route>

      </Routes>
    </div>
  )
}
