import React from 'react'

export default function Login(props) {
  return (
    <div>
        <h1>登陆页面</h1>
        <input type='text'></input>
        <button onClick={()=>{
            localStorage.setItem("token","123");
            // 登陆密码  正确返回center
            props.history.push(`/center`)
        }}>登录</button>
    </div>
  )
}
