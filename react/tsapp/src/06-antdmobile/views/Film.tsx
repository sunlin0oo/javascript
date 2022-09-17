import React, { Component } from 'react'
import axios from 'axios'
import {RouteComponentProps } from 'react-router-dom'
import {Button,Swiper} from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'
// 对Item做接口限制
interface IItem{
  filmId:number,
  name:string
}
// RouteComponentProps提前申请好的接口
export default class Film extends Component<RouteComponentProps>{
  state={
    list:[],
    looplist: [
      {bannerId:1006,name:"a",imgUrl:"/img/a.png"},
      {bannerId:1007,name:"b",imgUrl:"/img/b.jpg"},
      {bannerId:1008,name:"c",imgUrl:"/img/c.jpg"},
      {bannerId:1009,name:"d",imgUrl:"/img/d.jpg"},
      {bannerId:1010,name:"e",imgUrl:"/img/e.jpg"},
  ]
  }
  // 一定要指定类型
  ref = React.createRef<SwiperRef>()

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
        <Swiper loop autoplay ref={this.ref}>
          {this.state.looplist.map((item:any)=> 
          <Swiper.Item key={item.bannerId}>
            <img src={item.imgUrl} alt={item.name} style={{ width: "90%" }}></img></Swiper.Item>)}
        </Swiper>
        <Button color='danger' onClick={()=>{
          this.ref.current?.swipePrev()
        }}>上一个</Button>
        <Button color='success'  onClick={()=>{
          this.ref.current?.swipeNext()
        }}>下一个</Button>
        <ul>
          {
          this.state.list.map((item:IItem)=><li 
          key={item.filmId} 
          onClick={()=>{
              console.log(this.props.history);
              // 页面的跳转
              this.props.history.push(`/detail/${item.filmId}`);
          }}>{item.name}</li>)
        }
        </ul>
      </div>
    )
  }
}
