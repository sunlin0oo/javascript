import React, { useEffect } from 'react'
// 因为是router的孩子==>可以获得其属性值
export default function Detail(props) {
  useEffect(()=>{
    console.log('create')

    // store.dispatch 通知

    return ()=>{
      console.log('destory')
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
