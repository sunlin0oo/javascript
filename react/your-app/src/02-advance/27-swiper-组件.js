import React, { Component } from 'react'
import KSwiper from './swiper/Swiper'
import KSwiperItem from './swiper/SwiperItem'
export default class App extends Component {
  state = {
    list:[]
  }

  componentDidMount() {
    setTimeout(()=>{
        this.setState({
            list:["111", "222", "333"],
        })
    
    },1000)
    // new Swiper(".swiper",{
    //      // 如果需要分页器
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },
    // })
}

  render() {
    return (
      <div>
        <KSwiper>
          {
            this.state.list.map(item=><KSwiperItem key={item}>{item}</KSwiperItem>)
          }
        </KSwiper>
      </div>
    )
  }
}
