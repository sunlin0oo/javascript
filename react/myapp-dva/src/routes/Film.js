import React, { Component } from 'react'
//使用dva自身所带的工具库
import request from '../utils/request'
export default class Film extends Component {
  state={
    list:[]
  }
  componentDidMount(){
    request("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",{
      headers:{
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
      'X-Host': 'mall.film-ticket.film.list',
      }
    }).then(res=>{
      console.log(res.data.data)//获取到数据
      this.setState({
        list:res.data.data.films
      })
    })
  }
  render() {
    return (
      <div>
        {
        this.state.list.map(item=><li key={item.filmId} onClick={()=>{
          // 跳转路由
          this.props.history.push(`/detail/${item.filmId}`)
        }}>
          <img src={item.poster} alt={item.name} style={{width:'100px'}}></img>
          <p>{item.name}</p>
        </li>)

        }
        </div>
    )
  }
}
