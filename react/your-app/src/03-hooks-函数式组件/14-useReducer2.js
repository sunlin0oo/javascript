import React, { useReducer,useContext } from 'react'
const initailState = {
    a:"11111",
    b:"22222",
}

const reducer = (prevState,action)=>{
    // prevState接收的上一次的状态值,action接收的是dispatch传来的值
    let newstate = {...prevState}
    switch(action.type){
        case "change-a":
            newstate.a = action.value
            return newstate
        case "change-b":
            newstate.b = action.value
            return newstate
        default :
            return prevState
        
    }
}

const GlobalContext = React.createContext()//创造context对象

export default function App() {
    // 唯一的数据源
    const [state, dispatch] = useReducer(reducer, initailState)
    return (
        // 供应商提供方法和参数(value)
        <GlobalContext.Provider value={
            {
                state,// 这里的state是initailState
                dispatch
            }
        }>
            <div>
                <Child1/>
                <Child2/>
                <Child3/>
            </div>

        </GlobalContext.Provider>
    )
}

function Child1(){
    // 直接将GlobalContext当参数传入==>这里value返回的是供应商所提供的服务对象(value),无需下面进行回调
    const {dispatch} = useContext(GlobalContext)//去解构找出其中的dispatch方法
    return(
        <div style={{background:"red"}}>
            {/* 当点击函数触发 dispatch 将 值传给reducer===>state改变==>重新渲染所有组件 */}
            <button onClick={()=>{
                dispatch({
                    type:"change-a",
                    value:"aaaaaaaa"
                })
            }}>改变a</button>

            <button onClick={()=>{
                dispatch({
                    type:"change-b",
                    value:"bbbbbbbb"
                })
            }}>改变b</button>
        </div>
    )
}

function Child2(){
    const {state} = useContext(GlobalContext)//这里拿到的值是整个GlobalContext中value对象
    return (
       
        
        <div style={{background:"yellow"}}>child2-{state.a}-{console.log('a')}</div>
    )
}

function Child3(){
    const {state} = useContext(GlobalContext)//这里拿到的值是整个GlobalContext中value对象
    return (
        <div style={{background:"green"}}>child3-{state.b}-{console.log('b')}</div>
    )
}