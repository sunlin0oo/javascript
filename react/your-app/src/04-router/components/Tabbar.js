import React from 'react'
import { NavLink } from 'react-router-dom'
import style from'./Tabbar.module.css'

export default function Tabbar() {
  return (
    <div>
        <ul>
            <li>
                {/* 注意是#开始  */}
                {/* <a href='#/films'>电影</a> */}
                {/* 如果要监听改善，需要原生JS写window.onshashchangde==>location.hash */}
                {/* 用声明式导航解决监听问题 */}
                {/* activeClassName='choose'当选中时才会添加上，默认是添加class="active" */}
                <NavLink to='/films' activeClassName={style.choose}>电影</NavLink>
                {/* NavLink只能用在router里面 */}
            </li>
            <li>
                {/* <a href='#/cinemas'>影院</a> */}
                <NavLink to='/cinemas' activeClassName={style.choose}>影院</NavLink>
                {/* NavLink只能用在router里面 */}
            </li>
            <li>
                {/* <a href='#/center'>我的</a> */}
                <NavLink to='/center' activeClassName={style.choose}>我的</NavLink>
                {/* NavLink只能用在router里面 */}
            </li>
        </ul>
    </div>
  )
}
 