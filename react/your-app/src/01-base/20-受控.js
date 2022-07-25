import React, { Component } from 'react'

export default class App extends Component {
    state = {
        username:"kerwin",
    }
  render() {
    return (
      <div>
        <h1>登录页</h1>
        {/*将input看作组件看待 */}        
        <input type='text' 
        ref={this.myusername} 
        value={this.state.username} 
        onChange={(evt)=>{
            this.setState({
                username:evt.target.value
            })
        }}/>
        <button onClick={()=>{
            console.log(this.state.username);
        }}>登录</button>
         <button onClick={()=>{
            this.setState({
                username:''
            })
        }}>重置</button>
      </div>
    )
  }
}
