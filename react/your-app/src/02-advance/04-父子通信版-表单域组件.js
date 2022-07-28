import React, { Component } from 'react'
// 在react中要想当成表达式或者变量，就要进行大括号
class Field extends Component{
    render(){
        return <div style={{background:"yellow"}}>
            <label>{this.props.label}</label>
            <input type={this.props.type} onChange={(evt)=>{
                console.log(evt.target.value)
                // 回调父组件函数进行处理
                this.props.onChangeEvent(evt.target.value);
            }} value={this.props.value}></input>
        </div>

    }
}

export default class App extends Component {
  state = {
    // localStorage.setItem('username','sunlin')
    username:localStorage.getItem("username"),
    password:""
  }
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Field label="用户名" type="text" onChangeEvent={(value)=>{
              this.setState({
                username:value
              })
        }} value = {this.state.username}></Field>
        <Field label="密码" type="password" onChangeEvent={(value)=>{
              this.setState({
                password:value
              })
        }} value = {this.state.password}></Field>
        <button onClick={()=>{
          console.log(this.state.username,this.state.password);
        }}>登录</button>
        <button onClick={()=>{
          this.setState({
            username:"",
            password:""
          })
        }}>取消</button>
      </div>
    )
  }
}
