import React, { Component } from 'react'
import {HashRouter,NavLink,Redirect,Route, Switch} from 'react-router-dom'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import style from './css/film.module.css'
import { Swiper,Tabs } from 'antd-mobile'
import axios from 'axios';
console.log("style::",style);

export default class Films extends Component{
  state = {
    looplist: [
      {bannerId:1006,name:"a",imgUrl:"/img/a.png"},
      {bannerId:1007,name:"b",imgUrl:"/img/b.jpg"},
      {bannerId:1008,name:"c",imgUrl:"/img/c.jpg"},
      {bannerId:1009,name:"d",imgUrl:"/img/d.jpg"},
      {bannerId:1010,name:"e",imgUrl:"/img/e.jpg"},
  ]
}
// 数据是空数据，网站没有了
// componentDidMount() {
//     // console.log()

//     axios({
//         url: `https://m.maizuo.com/gateway?type=2&cityId=110100&k=5032824`,
//         headers: {
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
//             'X-Host': 'mall.cfg.common-banner'
//         }
//     }).then(res => {
//         console.log(res.data)
//         this.setState({
//             looplist: res.data.data
//         })
//     })
// }
render() {
    return (
      // 可以通过字符串拼接，对类进行特殊处理
      <div className={style.active + 'aaaa'}>
        {/* <div style={{height:"200px",background:"yellow"}}>大轮播</div> */}
        {/* 轮播部分 */}
        <Swiper autoplay={true} loop={true}>
            {
                this.state.looplist.map(item =>
                    <Swiper.Item key={item.bannerId}>
                        <img src={item.imgUrl} alt={item.name} style={{ width: "100%" }} />
                    </Swiper.Item>
                )
            }
        </Swiper>
        {/* 单页面的CSS是重复的，别的文件引入，即可直接使用 ,但是可能会重名，通过在CSS文件中添加module==>film.module.css
          来解决重名的问题，多使用id/class选择器，少用标签选择器 */}
        {/* <ul>
          
          <li>
            <NavLink to='/films/nowplaying' activeClassName={style.active}>正在热映</NavLink>
          </li>
          <li>
          <NavLink to='/films/comingsoon' activeClassName={style.active}>即将上映</NavLink>
          </li>
        </ul> */}
        {/* Tabs标签页部分 */}
        <div style={{position:"sticky",top:0,background:"white"}}>
            <Tabs onChange={(value)=>{
              // value就是key设置成跳转路径
                console.log(value)

                this.props.history.push(value)
            }}
            //  activeKey高亮路由配置
            activeKey={this.props.location.pathname}>
                <Tabs.Tab title='正在热映' key='/films/nowplaying'> 
                </Tabs.Tab>
                <Tabs.Tab title='即将上映' key='/films/comingsoon'>
                </Tabs.Tab>
            </Tabs>
        </div>
        
        {/*路由配置，嵌套路由 */}
        <Switch>
          {/* 是Route的儿子，可以获取一些功能获取props对象等 */}
          <Route path='/films/nowplaying' component={Nowplaying}/>
          <Route path='/films/comingsoon' component={Comingsoon}/>
          <Redirect from='/films' to='/films/nowplaying' exact></Redirect>
        </Switch>
      </div>
    )
  }
}
