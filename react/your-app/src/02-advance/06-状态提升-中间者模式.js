import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communination.css'
// 将多个组件需要共享的状态上升到最近的公共父组件

// 将info状态进行提升处理
export default class App extends Component {
    constructor(){
        super()
        this.state = {
            fileList : [],
            info:''
        }
        // public是静态库，可以直接获取到
        // axios.get(`/test.json`).then(res=>{
        //     this.setState({
        //         fileList:res.data.data.films
        //     })
        //     console.log(res.data.data.films)
        // })
    }
    //在这里进行axios请求
    // 成功render并渲染完成真实DOM之后触发，可以修改DOM
    componentDidMount(){
        axios.get("/test.json").then(res=>{
            console.log(res.data.data.films)
            this.setState({
                fileList:res.data.data.films
            })
            // 访问
        })
    }
  render() {
    return (
      <div>
        {
            this.state.fileList.map(item=>
                // 创建10个FilmItem组件---key值不能作为属性进行传递
                <FilmItem key={item.filmId} {...item} 
                onEvent={(value)=>{
                    this.setState({
                        info:value
                    })
                }}></FilmItem>
            )
        }
        <FilmDetail info = {this.state.info}></FilmDetail>
      </div>
    )
  }
}
//子组件调用回调函数onEvent==>更改父组件状态info，父组件的状态再传递给子组件FilmDetail
class FilmItem extends Component{
    render(){
        console.log(this.props);//通过父组件  ...item ==>可以拿到所有的数据
        let {name,poster,grade,synopsis} = this.props;//解构
        return <div className='filmitem' onClick={()=>{
            this.props.onEvent(synopsis);
        }}>
            <img src={poster} alt={name}></img>
            <h4>{name}</h4>
            <div>{grade}</div>
        </div>
    }
}

class FilmDetail extends Component{
    render(){
        return <div className='filmdetail'>
            {this.props.info}
        </div>
    }
}
