import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'
export default class App extends Component {
  render() {
    // 动画引入变量keyframes
    const myaniamtion = keyframes`
    from{
        transform:rotate(0deg)
    }
    to{
        transform:rotate(360deg)
    }
    `
    const StyledDiv = styled.div`
        width:100px;
        height:100px;
        background:red;
        animation:${myaniamtion} 1s infinite
    `
    return (
        <div>
            <StyledDiv></StyledDiv>
        </div>
    )
  }
}
