import { withRouter } from 'dva/router'
import React, { Component } from 'react'
import request from '../utils/request'

export default class Center extends Component {
  // 在webpackckrc中进行反向代理
  componentDidMount() {
    request("/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4").then(res => {
      console.log(res)
    })

    request("/users").then(res=>{
      console.log(res.data);
    })
  }
  render() {
    return (
      <div>
        Center
        <WithChild></WithChild>
      </div>

    )
  }
}

class Child extends Component {
  render() {
    return <div>
      <button onClick={() => {
        localStorage.removeItem('token');
        this.props.history.push(`/login`)
      }}>退出登录</button>
    </div>
  }
}

const WithChild = withRouter(Child)