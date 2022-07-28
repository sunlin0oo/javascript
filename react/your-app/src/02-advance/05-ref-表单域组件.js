import React, { Component } from 'react'
// 在react中要想当成表达式或者变量，就要进行大括号
class Field extends Component{
    state = {
        value:''
    }

    clear(){
        this.setState({
            value:""
        })
    }

    render(){
        return <div style={{background:"yellow"}}>
            <label>{this.props.label}</label>
            <input type={this.props.type} onChange={(evt)=>{
                this.setState({
                    value:evt.target.value
                })
                // 内部受控
            }} value={this.state.value}></input>
        </div>

    }
}

export default class App extends Component {
  username = React.createRef();
  password = React.createRef();

  render() {
    return (
      <div>
        <h1>登录页面</h1>
        {/* 把ref放在组件上拿到的是组件对象,可以通过这样的方法去获得组件里面的状态,方法等 */}
        <Field label="用户名" type="text" ref={this.username}></Field>
        <Field label="密码" type="password" ref={this.password}></Field>
        <button onClick={()=>{
            console.log(this.username.current.state.value,
            this.password.current.state.value)}}>登录</button>
        <button onClick={()=>{
            // 调用Field中的方法
            this.username.current.clear()
            this.password.current.clear()}}>取消</button>
      </div>
    )
  }
}
