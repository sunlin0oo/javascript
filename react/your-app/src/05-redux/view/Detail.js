import React, { useEffect } from 'react'
import { show, hide } from '../redux/actionCreator/TabbaractionCreator';
import store from '../redux/store'

/**Redux整体流程：
 * 1.(App.js) 进行 store.subsribe订阅
 * 2.进入detail页面创建Detail组件触发dispatch 发送action
 *   当(Detail)创建时，触发useEffect==>store.dispatch==>actionCreator 获取：type:"kerwinhide-tabbar" 
 *   当(Detail)销毁时时，触发useEffect==>store.dispatch==>actionCreator 获取：type:"kerwinshow-tabbar" 
 * 3.由store.js进行处理,发送action和prevState 到reducer中==>他会挨着去触发一遍，直到匹配相对应的type
 * 4.通过reducer返回新状态出去
 * 5.通知订阅者进行更新*/ 
export default function Detail(props) {
  useEffect(()=>{
    console.log('create')

    // store.dispatch 通知==>这里面传的是action对象==>有type对象
    store.dispatch(hide());//通知到app订阅者==>将其写成函数直接对函数进行调用
    return ()=>{
      // 卸载时所触发
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
