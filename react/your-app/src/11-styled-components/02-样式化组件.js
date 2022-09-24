import React, { Component } from 'react'
import styled from 'styled-components'
export default class App extends Component {
  render() {
    // 把Child进行封装时，会传属性.className给孩子==>class样式就是下面的CSS代码
    const StyledChild = styled(Child)`
        background:yellow;
        color:red;
        
    `
    return (
      <div>
        <StyledChild></StyledChild>
      </div>
    )
  }
}

function Child(props){
    return <div className={props.className}>
        Child
    </div>
}
