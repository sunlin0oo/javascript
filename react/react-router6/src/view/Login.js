import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigator = useNavigate();
  return (
    <div>
        <h1>Login</h1>
        <div>用户名</div>
        <input type='text'></input>
        <div>密码</div>
        <input type='password'></input>
        <button onClick={()=>{
            localStorage.setItem('token','sunlin');
            navigator('/centers');
        }}>登录</button>
    </div>
  )
}
