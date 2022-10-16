import React, { Component } from "react";
// 如果有多级路由或者嵌套，需要建立文件夹，父组件是_layout进行处理,其余组件会自动成为父组件的儿子
import { Redirect, useLocation } from "umi";
// 通过父传的属性可以拿到location.path用于判断当前页面
export default function Film(props: {
    location: any; children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}) {
    // const locationPath = props.location.path;
    const location = useLocation();
    if (location.pathname === '/film' || location.pathname === '/film/') {
        return <Redirect to='/film/nowplaying'></Redirect>
    }
    return (
        <div>
            {/* 
            ①外层花括号：因为React使用的是JSX语法，JSX语法中嵌入任何js变量、表达式、对象都要用花括号{}扩起来，
            ②内层花括号：JSX如果用到行内CSS style样式时，这个行内样式必须是一个js对象，即{width:'233px', marginRight:'10px'}是一个对象所以用花括号扩起来。*/}
            <div style={{ height: '200px', background: 'yellow' }}>大轮播</div>
            {/* 存在疑问?为什么这里的插槽会在路由切换的时候渲染组件
            deal:想象成动态加载路由==>加载自己根路由下子路由
            */}
            {props.children}
        </div>
    )
}