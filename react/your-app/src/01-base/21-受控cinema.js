/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class Cinema extends Component {

    constructor(){
        super()

        this.state = {
            cinemaList:[],
            mytext:"",
            // bakcinemaList:[]
        }

        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method:"get",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
                
                'X-Host': 'mall.film-ticket.cinema.list'

            }
        }).then(res=>{
            console.log(res.data.data.cinemas)
            // React18中仅仅此方法可以等待setstate赋值完后从而执行接下来的方法
            this.setState({
                // 获取所有的数据
                cinemaList:res.data.data.cinemas,
                // bakcinemaList:res.data.data.cinemas
            },()=>{
                // 打印log
            console.log(this.state.cinemaList)

            new BetterScroll(".kerwinwrapper")
            })

        })
    }

    // 后面讲的生命周期函数 更适合发送ajax
    render() {
        
        return (
            <div>
                {/* 受控组件，牵一发动全身，input调用==>mytext改变==>render重新调用==>则会重新渲染 */}
                    <input value={this.state.mytext} 
                            onChange={(evt)=>{
                                this.setState({
                                    mytext:evt.target.value
                                })
                    }}/>
                    {/* 最外面的盒子是有限的 */}
                    <div className="kerwinwrapper" style={{height:'500px',background:'yellow',overflow:'hidden'}}>
                        {/* 里面的盒子是无限大，也就是把信息放入即可*/}
                        <div className="kerwincontent">
                            {
                                this.getCinemaList().map(item=>
                                    <dl key={item.cinemaId}>
                                        <dt>{item.name}</dt>
                                        <dd>{item.address}</dd>
                                    </dl>    
                                )
                            }
                        </div>
                    </div>
               
            </div>
        )
    }
    // 对于数据的模糊搜索
    getCinemaList(){
        // 这样cinemaList 每次都不会被覆盖
        return this.state.cinemaList.filter(item=>item.name.toUpperCase().includes(this.state.mytext.toUpperCase()) || 
        item.address.toUpperCase().includes(this.state.mytext.toUpperCase())
        )
    }

    handleInput = (event)=>{
        console.log("input",event.target.value)
        // newlist 作为中间变量进行存储（过滤出地址或者姓名是这个的）
        var newlist = this.state.bakcinemaList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase()) || 
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
        )

        // console.log(newlist)

        this.setState({
            cinemaList:newlist
        })
        //cinemaList 每次都会被重新覆盖，，


        console.log(this.state.cinemaList)
    }
}
