import React, { Component } from 'react'
import styled from 'styled-components'// React体系下写CSS的方法
// 可以直接将标签包装成组件并且塞上样式
export default class App extends Component {
  render() {
    const StyledFooter = styled.footer`
        background:yellow;
        position:fied;
        left:0;
        bottom:0;
        width:100%;
        height:50px;
        line-height:50px;
        text-align:center;
        // 支持嵌套语法
        ul{
            display:flex;
            list-style:none;
            li{
                flex:1;
                &:hover{
                    background:red
                }
            }
        }
    `
    return (
        // 将footer写成带样式的组件
    //   <footer>
    <StyledFooter>
        <ul>
            <li>首页</li>
            <li>列表</li>
            <li>我的</li>
        </ul>
    </StyledFooter>
    //   </footer>
    )
  }
}
