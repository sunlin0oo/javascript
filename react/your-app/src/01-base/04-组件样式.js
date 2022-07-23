import React, { Component } from "react";
import './css/01-index.css'//导入css模块==>webpack的支持
export default class App extends Component{
    render(){
        var myname = "kerwin";
        // 单一属性写成驼峰写法
        var obj = {
            backgroundColor:"yellow",
        }
        return (
            <div>
                {/* 将逻辑代码放入大括号里面，也可以添加外部变量 */},

                {10+20} - {myname}, 

                <div style={obj}>1111111111</div>
                {/* React推荐我们使用行内样式，因为React觉得我们每一个组件都是一个独立的整体 */}
                <div className='active'>1111111111</div>

                <label htmlFor="username">用户名：</label>
                {/* 可以获取焦点 */}
                <input type='text' id='username'></input>
            </div>
        )
    }
}