import React, { useEffect } from 'react'
import { show, hide } from '../redux/actionCreator/TabbaractionCreator';
import store from '../redux/store'

export default function Detail(props) {
  useEffect(()=>{
    console.log('create')

    // store.dispatch 通知==>这里面传的是action对象
    store.dispatch(hide());//通知到app订阅者==>将其写成函数直接对函数进行调用
    return ()=>{
      console.log('destory')
      store.dispatch(show())
    }
  },[])
  // 动态路由传参
  console.log(props.match.params.myid,"利用id去后端拿数据")
  // query传参
  // console.log(props.location.query.id,"利用id去后端拿数据")
  // state传参
  // console.log(props.location.state.myid,"利用id去后端拿数据")
  return (
    <div>Detail</div>
  )
}
