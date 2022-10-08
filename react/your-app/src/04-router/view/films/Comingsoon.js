import axios from 'axios'
import React, { Component } from 'react'

export default class Comingsoon extends Component {
  // 反向代理==>跨域问题是浏览器阻止，可以通过http://localhost:3000与猫眼进行数据通信，然后再往自己服务器进行数据请求
//   成功render并渲染完成真实DOM之后触发，可以修改DOM==>适合做axios请求
    componentDidMount() {
        axios.get("/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=0213411066DB11EC97E5B17F51643A714D3DCE91F9A042A0B8038AF6545D2CFB&optimus_risk_level=71&optimus_code=10").then(res=>{
            console.log("res.data::",res.data)
        })
    }
    
    render() {
        return (
            <div>
                Comingsoon
            </div>
        )
    }
}