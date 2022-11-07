import React, { useEffect, useState } from 'react'
import store from '../redux/store';
import {getCinemaListAction} from '../redux/actionCreator/getCinemaListAction'
/**Redux整体流程：
 * 1.(search.js) 进行 store.subsribe订阅
 * 2.进入search页面创建search组件触发dispatch 发送action
 * 3.由store.js进行处理,发送action和prevState 到reducer中==>他会挨着去触发一遍，直到匹配相对应的type
 * 4.通过reducer返回新状态出去
 * 5.通知订阅者进行更新*/ 
export default function Cinemas(props) {
  // 这里store.getState().cityName获取由redux到最新的数据
  // 拆开调用多了一层，相当于子redux是子空间，需要多套一层
  const [cityName, setcityName] = useState(store.getState().CityReducer.cityName);
  // const [cityName, setcityName] = useState(store.getState().cityName);

  const [CinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list);

useEffect(()=>{
    // console.log('CinemaListReducer' ,store.getState().CinemaListReducer);
    if(store.getState().CinemaListReducer.list.length === 0){
      // 去后台取数据==>actionCreator 里写异步
      store.dispatch(getCinemaListAction())
    }else{
      console.log("store缓存")
    }
    // 订阅==>不能够重复订阅 要进行销毁
    var unsubscribe = store.subscribe(()=>{
      console.log('cinema中订阅',store.getState().CinemaListReducer.list);
      setCinemaList(store.getState().CinemaListReducer.list);
    })
    return ()=>{
      // 取消订阅
      unsubscribe();
    }
},[])


  return (
    <div>
       <div>
        <div onClick={()=>{
        props.history.push(`/city`);
      }}>{cityName}</div>
      <div style={{float:'right'}} onClick={()=>{
        props.history.push(`/cinemas/search`)
      }}>搜索</div>
    </div>
    
      {
        CinemaList.map(item=>
        <dl key={item.cinemaId} style={{padding:"20px"}}>
          <dt>{item.name}</dt>
          <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
        </dl>)
      }
    </div>
  )
}
