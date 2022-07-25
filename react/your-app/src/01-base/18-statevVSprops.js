import React, { Component } from 'react'
class Child extends Component{
    render(){
        return <div>
            Child-{this.props.text}
            {/* 属性子组件 不可以修改 */}
            {/* <button onClick={()=>{
            this.setState({
                this.props.text = "222222222"
            })
        }}>cilck-son</button> */}
        </div>
    }
}
// 多写无状态组件，少写有状态组件
export default class App extends Component {
    state = {
        text:"11111111111",
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                text:"222222222"
            })
        }}>cilck-father</button>
        <Child text={this.state.text}></Child>
      </div>
    )
  }
}
