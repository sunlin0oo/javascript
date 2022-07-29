import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return <div style={{background:"red"}}>
            {this.props.children}
            <span>Navbar</span>
        </div>
    }
}

class Sidebar extends Component{
    render(){
        return <div style={{background:"yellow",width:'200px'}}>
            <ul>
                <li>11111111</li>
                <li>11111111</li>
                <li>11111111</li>
                <li>11111111</li>
                <li>11111111</li>
                <li>11111111</li>
                <li>11111111</li>
                <li>11111111</li>
            </ul>
        </div>
    }
}

export default class App extends Component {
    state = {
        isShow:false,
    }
  render() {
    return (
      <div>
        {/* 子传父，父传一个回调函数 */}
        <Navbar >
            <button onClick={()=>{
                this.setState({
                    isShow :!this.state.isShow
                })
            }}>Click</button>
        </Navbar>
        {/* <button onClick={()=>{
            this.setState({
                isShow:!this.state.isShow
            })
        }}>Click</button> */}
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    )
  }

  handleEvent = ()=>{
    this.setState({
        isShow:!this.state.isShow
    })
    console.log("父组件事件")
  }
}
// 父传子：属性；子传父：回调函数