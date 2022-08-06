import React, { useReducer } from 'react'
// 处理函数
  const reducer = (prevState,action)=>{
    // prevState:上一次的State值;action:dispatch传入的type类型
    console.log("reducer",prevState,action);
    // 不要直接修改原状态，对老状态进行深复制
    let newstate = {...prevState};
    switch(action.type){
      case "kerwin-minus":
        newstate.count--;
        return newstate;
        // 这里返回出去，会在跟组件那里获取到新值
      case "kerwin-add":
        newstate.count++;
        return newstate
      
        default:
          return prevState;
    }
  }
  // 定义在外部对象
  const intialState = {
    count:0,
  }
  
export default function App() {
  const [state,dispatch] = useReducer(reducer,intialState);
  // 调用dispatch会传入到reducer中

  return (
    <div>
      
      <button onClick={()=>{
        dispatch({
          type:"kerwin-minus"
        })
      }}>-</button>
      {state.count}
      <button onClick={()=>{
        dispatch({
          type:"kerwin-add"
        })
      }}>+</button>
    </div>
  )
}
