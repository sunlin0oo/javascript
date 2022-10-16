import React from "react";
// 这里相当于在整个路由外面再套一个大的根组件
// 要运行需要重启服务器
// 如果有layouts文件夹的话就会被作为是根组件进行处理==>进行声明式导航
import { NavLink } from "umi";
import './index.less'
export default function IndexLayout(props: any) {
    if (props.location.pathname === '/city' || props.location.pathname.includes('/details')) {
        // 不包含选项卡 只有路由组件
        return <div>{props.children}</div>
    }
    return (
        <div>
            {/* IndexLayout */}
            {/* 存放路由组件 */}
            {props.children}
            <ul>
                <li>
                    <NavLink to='/film' activeClassName="active">Film</NavLink>
                </li>
                <li>
                    <NavLink to='/center' activeClassName="active">Center</NavLink>
                </li>
                <li>
                    <NavLink to='/cinema' activeClassName="active">Cinema</NavLink>
                </li>
            </ul>
        </div>
    )
}