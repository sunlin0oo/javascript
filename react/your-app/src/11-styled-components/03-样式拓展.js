import React, { Component } from 'react'
import styled from 'styled-components'
export default class App extends Component {
  render() {
    const StyledButton = styled.button`
        width:100px;
        height:100px;
        background:red;

    `
    // 继承
    const StyledButton2 = styled(StyledButton)`
        background:yellow
    `

    const StyledButton3 = styled(StyledButton2)`
    background:blue
    `
    return (
      <div>
        App-
        <StyledButton></StyledButton>
        <StyledButton2></StyledButton2>
        <StyledButton3></StyledButton3>
      </div>
    )
  }
}
