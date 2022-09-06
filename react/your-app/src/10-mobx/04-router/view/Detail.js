import React, { useEffect } from 'react'
import store from '../mobx/store'
export default function Detail(props) {
  useEffect(()=>{
    console.log('create')
    // store.dispatch 通知
    // store.isTabbarShow = true;
    store.changeShow();
    return ()=>{
      console.log('destory')
      // 通过mobx进行store通信
      // store.isTabbarShow = false ;
      store.changeHide();
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
