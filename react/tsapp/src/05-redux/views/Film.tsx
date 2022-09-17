import React, { Component } from 'react'
import axios from 'axios'
import {RouteComponentProps } from 'react-router-dom'
// 对Item做接口限制
interface IItem{
  filmId:number,
  name:string
}
// RouteComponentProps提前申请好的接口
export default class Film extends Component<RouteComponentProps>{
  state={
    list:[]
  }
  componentDidMount(): void {
    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",
      headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
      }
  }).then(res=>{
      console.log(res.data.data.films)
      this.setState({
        list:res.data.data.films
      })
  })
  }
  render() {
    return (
      <div>
        {
          this.state.list.map((item:IItem)=><li 
          key={item.filmId} 
          onClick={()=>{
              console.log(this.props.history);
              // 页面的跳转
              this.props.history.push(`/detail/${item.filmId}`);
          }}>{item.name}</li>)
        }
      </div>
    )
  }
}
