import React, { useReducer } from 'react'
// useReducer 是 useState 的替代方案
// 处理函数==>纯函数
const reducer = (prevState, action) => {
  // prevState:上一次的State值(第一次是intialState);action:dispatch传入的type类型
  console.log("reducer", prevState, action);
  // 不要直接修改原状态，对老状态进行深复制
  let newstate = { ...prevState };
  switch (action.type) {
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
  count: 0,
}
export default function App() {
  // 第一个参数：reducer函数 第二个参数：初始化的state。返回值为最新的state和dispatch函数（用来触发reducer函数，计算对应的state）
  const [state, dispatch] = useReducer(reducer, intialState);// 取得外部状态给==>通过state.xxx取得
  // 调用dispatch会传入到reducer中
  return (
    <div>
      <button onClick={() => {
        // 点击函数触发dispatch 发送action 给 reducer,根据类型进行判断
        dispatch({
          type: "kerwin-minus"
        })
      }}>-</button>
      {state.count}
      <button onClick={() => {
        dispatch({
          type: "kerwin-add"
        })
      }}>+</button>
    </div>
  )
}
