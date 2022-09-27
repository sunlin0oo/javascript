import React, { useReducer,useContext } from 'react'
const initailState = {
    a:"11111",
    b:"22222",
}

const reducer = (prevState,action)=>{
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
        <GlobalContext.Provider value={
            {
                state,
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
    const {dispatch} = useContext(GlobalContext)//这里拿到的值是整个GlobalContext中value对象
    return(
        <div style={{background:"red"}}>
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
        <div style={{background:"yellow"}}>child2-{state.a}</div>
    )
}

function Child3(){
    const {state} = useContext(GlobalContext)//这里拿到的值是整个GlobalContext中value对象
    return (
        <div style={{background:"green"}}>child3-{state.b}</div>
    )
}