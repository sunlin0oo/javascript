import React, { Component} from 'react'
import request from '../utils/request';

export default class Login extends Component {
  userName = React.createRef();
  passWord = React.createRef();
  render() {
    return (
      <div>
        <h3>用户名：</h3>
        <input type="text" ref={this.userName}></input>
        <br/>
        <h3>密码：</h3>
        <input type="password" ref={this.passWord}></input>
        {/* 写了一个POST请求，将登录页面数据发送到后端，于mock中书写 */}
        <button onClick={()=>{
          request("/users/login",{
            method:"POST",
            body:JSON.stringify({
              username:this.userName.current.value,
              password:this.passWord.current.value
            }),
            headers:{
              "Content-Type":"application/json"
            }
          }).then(res=>{
            console.log('res.data', res.data);
            if(res.data.ok){
              console.log('登录成功');
              localStorage.setItem('token','sunlin');
              this.props.history.push("/center");
            }else{
              alert('登录失败');
            }
          })
        }}>登录</button>
      </div>
    )
  }
}
