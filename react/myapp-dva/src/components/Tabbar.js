import React, { Component } from 'react'
import style from './Tabbar.css';//不同点 CSS作为对象进行传出，需要获取其属性值
import {NavLink} from 'dva/router'
export default class Tabbar extends Component {
  render() {
    return (
      <div>
        <footer>
            <ul>
                <li><NavLink to='/film' activeClassName={style.active}>film</NavLink></li>
                <li><NavLink to='/center' activeClassName={style.active}>center</NavLink></li>
                <li><NavLink to='/cinema' activeClassName={style.active}>cinema</NavLink></li>
            </ul>
        </footer>
      </div>
    )
  }
}
