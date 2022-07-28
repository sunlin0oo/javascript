import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communination.css'
export default class App extends Component {

    constructor(){
        super()
        this.state = {
            fileList : [],
            info:''
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
                <FilmItem key={item.filmId} {...item} onEvent={(value)=>{
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

class FilmItem extends Component{
    render(){
        console.log(this.props);//通过父组件...item==>可以拿到所有的数据
        let {name, poster,grade,synopsis} = this.props;//解构
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
