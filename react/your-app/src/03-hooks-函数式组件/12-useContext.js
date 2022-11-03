import React, { Component, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './css/03-communination.css'
//修改自02-advance==>09-context

//子组件想要通信，需要设置context，并且设置共有的父组件供应商==>
// 自顶向下,context相当于顶部的处理部分，可以通过useContext(GlobalContext) 可调用类似的数值传递给父组件由父组件处理再传递给子组件
const GlobalContext = React.createContext()//创造context对象

// useContext 减少组件层级
export default function App(){
    const [filmList, setfilmList] = useState([]);
    const [info,setinfo] = useState("");
// 先请求JSON数据
    useEffect(()=>{
        axios.get('/test.json').then(res=>{
            setfilmList(res.data.data.films)
        })
    })

    return (
        // 供应商提供方法(changeInfo)和参数(info)
        <GlobalContext.Provider value={{
            info:info,
            changeInfo:(value)=>{
               setinfo(value)
            }
        }}>
            <div>
                {
                    filmList.map(item=>
                        <FilmItem key={item.filmId} {...item}></FilmItem>
                    )
                }
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}

// 类组件
// export default class App extends Component {

//     constructor(){
//         super()
//         this.state = {
//             fileList : [],
//             info:''
//         }
//         // public是静态库，可以直接获取到
//         axios.get(`/test.json`).then(res=>{
//             this.setState({
//                 fileList:res.data.data.films
//             })
//             console.log(res.data.data.films)
//         })
//     }

//   render() {
//     return (
//         // 供应商提供方法和变量
//         <GlobalContext.Provider value={{
//             info:this.state.info,
//             changeInfo:(value)=>{
//                 this.setState({
//                     info:value
//                 })
//             }
//         }}>
//             <div>
//                 {
//                     this.state.fileList.map(item=>
//                         <FilmItem key={item.filmId} {...item}></FilmItem>
//                     )
//                 }
//                 <FilmDetail></FilmDetail>
//             </div>
//         </GlobalContext.Provider>
//     )
//   }
// }

function FilmItem(props){
    let {name, poster,grade,synopsis} = props;//解构
    const value = useContext(GlobalContext);//直接将GlobalContext当参数传入==>这里value返回的是供应商所提供的服务对象(value),可直接调用对应的函数及参数,无需下面进行回调
        return <div className='filmitem' onClick={()=>{
            console.log(synopsis);
            value.changeInfo(synopsis);
            console.log("111111111");
        }}>
            <img src={poster} alt={name}></img>
            <h4>{name}</h4>
            <div>{grade}</div>
        </div>
        // 消费者写法

        // return(
        //     <GlobalContext.Consumer>
        //         { //回调函数传递公共服务
        //             (value)=>{
        //                 console.log("value:::",value);
        //                 return <div className='filmitem' onClick={()=>{
        //                     console.log(synopsis);
        //                     value.changeInfo(synopsis);
        //                     console.log("111111111");
        //                 }}>
        //                     <img src={poster} alt={name}></img>
        //                     <h4>{name}</h4>
        //                     <div>{grade}</div>
        //                 </div>
        //             }
        //         }
        //     </GlobalContext.Consumer>
        // )
}
// 类组件
//想要拿到信息要把自己包装成消费者
// class FilmItem extends Component{
//     render(){
//         // console.log(this.props);//通过父组件...item==>可以拿到所有的数据
//         let {name, poster,grade,synopsis} = this.props;//解构
//         return(
//             <GlobalContext.Consumer>
//                 { //回调函数传递公共服务
//                     (value)=>{
//                         console.log("value:::",value);
//                         return <div className='filmitem' onClick={()=>{
//                             console.log(synopsis);
//                             value.changeInfo(synopsis);
//                             console.log("111111111");
//                         }}>
//                             <img src={poster} alt={name}></img>
//                             <h4>{name}</h4>
//                             <div>{grade}</div>
//                         </div>
//                     }
//                 }
//             </GlobalContext.Consumer>
//         )
//     }
// }


// 函数组件
function FilmDetail(){
    const value = useContext(GlobalContext)
    // context写法
    return (
        <div className='filmdetail'>
                        detail-{value.info}
                    </div>
    )
    // 消费者写法
    // return(
    //     <GlobalContext.Consumer>
    //         {
    //             (value)=><div className='filmdetail'>
    //                     detail-{value.info}
    //                 </div>
                
    //         }
    //     </GlobalContext.Consumer>
    // )
}
// 类组件
// class FilmDetail extends Component{
//     render(){
//         return(
//             <GlobalContext.Consumer>
//                 {
//                     (value)=><div className='filmdetail'>
//                             detail-{value.info}
//                         </div>
                    
//                 }
//             </GlobalContext.Consumer>
//         )
//     }
// }
