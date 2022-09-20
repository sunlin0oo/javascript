import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communination.css'

//子组件想要通信，需要设置context，并且设置共有的父组件供应商
// 可以算作一个全局的变量
const GlobalContext = React.createContext()//创造context对象

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
        // 供应商 中设置value对象，里面的提供方法(changeInfo)和变量(info)
        <GlobalContext.Provider value={{
            info:this.state.info,
            changeInfo:(value)=>{
                this.setState({
                    info:value
                })
            }
        }}>
            <div>
                {
                    this.state.fileList.map(item=>
                        <FilmItem key={item.filmId} {...item}></FilmItem>
                    )
                }
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
  }
}

//想要拿到信息要把自己包装成消费者
class FilmItem extends Component{
    render(){
        // console.log(this.props);//通过父组件...item==>可以拿到所有的数据
        let {name, poster,grade,synopsis} = this.props;//解构
        return(
            <GlobalContext.Consumer>
                { //回调函数传递公共服务
                    (value)=>{
                        console.log("value:::",value);
                        return <div className='filmitem' onClick={()=>{
                            console.log(synopsis);
                            value.changeInfo(synopsis);
                            console.log("111111111");
                        }}>
                            <img src={poster} alt={name}></img>
                            <h4>{name}</h4>
                            <div>{grade}</div>
                        </div>
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}

class FilmDetail extends Component{
    render(){
        return(
            <GlobalContext.Consumer>
                {
                    // value相当于是props可以获取到供应商(Provider)中的参数==>传递公共服务
                    (value)=><div className='filmdetail'>
                            detail-{value.info}
                        </div>
                }
            </GlobalContext.Consumer>
        )
    }
}
