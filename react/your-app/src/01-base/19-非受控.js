import React, { Component } from 'react'

export default class App extends Component {
    // 通过ref来获取到DOM表单
    myusername = React.createRef();
  render() {
    return (
      <div>
        <h1>登录页</h1>
        {/*如果写value则是写死状态
        defaultValue保持第一次的value  */}
        <input type='text' ref={this.myusername} defaultValue='kerwin'/>
        <button onClick={()=>{
            console.log(this.myusername.current.value);
        }}>登录</button>
         <button onClick={()=>{
            this.myusername.current.value = '';
        }}>充值</button>
      </div>
    )
  }
}
