import React, { Component } from 'react'

export default function Login(props) {
  return (
    <div>
        <h1>登陆页面</h1>
        <input type='text'></input>
        <button onClick={()=>{
          // 设置姓名 和  密码==>本地缓存
          localStorage.setItem("token","123");
          // 登陆密码  正确返回center
          props.history.push(`/center`)
        }}>登录</button>
    </div>
  )
}

// export default class Login extends Component(){
//   render(){
//     return (
//       <div>
//         <h1>登陆页面</h1>
//         <input type='text'></input>
//         <button onClick={()=>{
//           localStorage.setItem('token','123');
//           this.props.history.push(`/center`)
//         }}>登录</button>
//       </div>
//     )
//   }
// }
