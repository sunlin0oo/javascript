import React, { Component } from 'react'
import styled from 'styled-components'
export default class App extends Component {
  render() {
    const StyledInput = styled.input`
        outline:none;
        border-radius:10px;
        border-bottom:1px solid red
    `
// 基于props做样式判断
    const StyledDiv = styled.div`
    // props 是父传子传输过的属性
        background:${props=>props.bg};
        width:100px;
        height:100px;
    `
    return (
        <div>
            App-
            {/* <input type={'text'}></input> */}
            {/* 正常支持type改变 */}
            {/* <StyledInput type='text'></StyledInput> */}
            <StyledInput type='password' placeholder='输入'></StyledInput>
            <StyledDiv bg='red'></StyledDiv>
        </div>
    )
  }
}
