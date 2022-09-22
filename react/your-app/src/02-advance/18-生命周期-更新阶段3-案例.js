import React, { Component } from 'react'
import axios from 'axios'
class FileList extends Component{
    state={
        list:[]
    }
    // 初始化生命周期，执行一次
    componentDidMount(){
        if(this.props.type===1){
            //请求卖座正在热映的数据
            console.log("请求卖座正在热映的数据")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301",
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
        }else{
            //请求卖座即将上映的数据

            console.log("请求卖座即将上映的数据")

            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8077848",
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
    }
    //后续中，如果父组件出发点击事件修改状态值type,从而触发UNSAFE_componentWillReceiveProps周期去进行渲染
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.type===1){
            //请求卖座正在热映的数据
            console.log("请求卖座正在热映的数据")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301",
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
        }else{
            //请求卖座即将上映的数据

            console.log("请求卖座即将上映的数据")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8077848",
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
    }
    render(){
        return <ul>
            {
                this.state.list.map(item=>
                <li key={item.filmId}>{item.name}</li>    
                )
            }
        </ul>
    }
}

export default class App extends Component {
    state = {
        type:1
    }
  render() {
    return (
      <div>
        <ul>
            <li onClick={()=>{
                this.setState({
                    type:1
                })
            }}>正在热映</li>
            <li onClick={()=>{
                this.setState({
                    type:2
                })
            }}>即将上映</li>
        </ul>
        <FileList type={this.state.type}></FileList>
      </div>
    )
  }
}
