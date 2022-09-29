import React, { Component, useContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import './css/03-communination.css'
// 尽量状态外部管理！
//修改自02-advance==>09-context

//子组件想要通信，需要设置context，并且设置共有的父组件供应商
const GlobalContext = React.createContext()//创造context对象

// 外部状态
const initailState = {
    filmList:[],
    info:""
}

const reducer = (prevState,action)=>{
    var newstate = {...prevState}
// 控制选择
    switch(action.type){
        case "change-filmlist":
            newstate.filmList = action.value;
            return newstate;
        case "change-info":
            newstate.info = action.value;
            return newstate;
        default:
            return prevState;
    }
}

// useContext 减少组件层级==>可以直接进行调用
export default function App(){
    const [state,dispatch] = useReducer(reducer,initailState);
    // const [filmList, setfilmList] = useState([]);
    // const [info,setinfo] = useState("");
    // 先请求JSON数据--第一次请求默认filmlist
    useEffect(()=>{
        axios.get('/test.json').then(res=>{
           dispatch({
            type:"change-filmlist",
            value:res.data.data.films
           })
        })
    })

    return (
        // 供应商提供方法和变量
        // value值进行解构
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                {
                    state.filmList.map(item=>
                        <FilmItem key={item.filmId} {...item}></FilmItem>
                    )
                }
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}

function FilmItem(props){
    let {name, poster,grade,synopsis} = props;//解构
    // 解构
    const {dispatch}= useContext(GlobalContext);
        // 绑定点击函数，每次点击时触发当前锁定应的介绍值
        return <div className='filmitem' onClick={()=>{
            dispatch({
                type:"change-info",
                value:synopsis
            })
            console.log(synopsis);
            // value.changeInfo(synopsis);
            console.log("111111111");
        }}>
            <img src={poster} alt={name}></img>
            <h4>{name}</h4>
            <div>{grade}</div>
        </div>
}

function FilmDetail(){
    const {state} = useContext(GlobalContext);// 这里的state是与reducer里面的同步
    return (
        <div className='filmdetail'>detail-{state.info}</div>
    )
}

