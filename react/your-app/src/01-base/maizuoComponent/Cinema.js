import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {
    constructor(){
        super()
        //axios
        // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159").then(res=>{
        //     console.log(res)
        // }).catch(err=>{
        //     console.log(err)
        // })
        this.state = {
            CinemaList : [],
            backinemaList :[],
        }
        //完整版写法：
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method:"get",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
                
                'X-Host': 'mall.film-ticket.cinema.list'

            }
        }).then(res=>{
            console.log("res.data.data.cinemas",res.data.data.cinemas)
            this.setState({
                CinemaList:res.data.data.cinemas,
                backinemaList:res.data.data.cinemas
            })
            console.log("CinemaList:",this.state.CinemaList);
        })
    }

    // 后面的生命周期函数更适合发送ajax
  render() {
    return (
        <div>
            <input onInput={this.handlerInput}/>
                {
                this.state.CinemaList.map(item=>
                <dl key={item.cinemaId}>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                </dl>)
                }
        </div>
    )
  }
  handlerInput=(evt)=>{
    console.log(evt);
    var newList = this.state.backinemaList.filter(item=>
        item.name.toUpperCase().includes(evt.target.value.toUpperCase())
         || 
        item.address.toUpperCase().includes(evt.target.value.toUpperCase()));
    this.setState({
        CinemaList:newList,
    })
    // 异步，这里的setstate是老状态
    console.log(this.state.CinemaList) 
  }
}


// filter
// var arr = ["1",'2','3'];
// // 看回调函数 
// var newarr = arr.filter(item=>item.includes("a"));