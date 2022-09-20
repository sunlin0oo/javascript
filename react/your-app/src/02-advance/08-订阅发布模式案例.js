import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communination.css'

//调度中心
var bus = {
    list :[],
    // 订阅--callback回调函数
    subscribe(callback){
        // console.log(callback);
        this.list.push(callback);
    },
    //发布
    publish(value){
        //遍历所有的list，将回调函数执行
        this.list.forEach(callback=>{
            callback && callback(value)
        })
    }
}

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            fileList : [],
        }
        // public是静态库，可以直接获取到
        axios.get(`/test.json`).then(res=>{
            this.setState({
                fileList:res.data.data.films
            })
            console.log(res.data.data.films)
        })
    }

  render() {
    return (
      <div>
        {
            this.state.fileList.map(item=>
                <FilmItem key={item.filmId} {...item}></FilmItem>
            )
        }
        <FilmDetail></FilmDetail>
      </div>
    )
  }
}

// 发布者
class FilmItem extends Component{
    render(){
        // console.log(this.props);//通过父组件...item==>可以拿到所有的数据
        let {name, poster,grade,synopsis} = this.props;//解构
        return <div className='filmitem' onClick={()=>{
            // console.log(synopsis)
            // 点击哪一个列表就发布哪一个列表的信息
            // 将synopsis==赋值==>info==>进行info状态的改变
            bus.publish(synopsis);
            // this.props.onEvent(synopsis);
        }}>
            <img src={poster} alt={name}></img>
            <h4>{name}</h4>
            <div>{grade}</div>
        </div>
    }
}

// 订阅者的组件，已经订阅上，根据发布者的操作去改变订阅者的东西
class FilmDetail extends Component{

    constructor(){
        super();
        this.state = {
            info:''
        }
        // 将(info)=>{}作为回调函数 推到 调度中心
        bus.subscribe((info)=>{
            // console.log("我在filmdetali中订阅",info)
            this.setState({
                info:info,
            })
        })
    }
    render(){
        return <div className='filmdetail'>
            {this.state.info}
        </div>
    }
}
