import React, { useMemo,useEffect, useState } from 'react'
import { SearchBar } from 'antd-mobile'
import store from '../redux/store';
import {getCinemaListAction} from '../redux/actionCreator/getCinemaListAction'
export default function Search() {
    const [mytext,setmytext] = useState("");
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

      //useMemo会记忆返回值，一开始是空数组==>添加cinemaList,mytext依赖，当这俩改变时去进行重新渲染
      const getCinemaList = useMemo(()=> CinemaList.filter(item=>item.name.toUpperCase().includes(mytext.toUpperCase()) || 
      item.address.toUpperCase().includes(mytext.toUpperCase())
      ),[CinemaList,mytext])
    
      return (
        <div>
            {/* <input value={mytext} onChange={(evt)=>{
                        setmytext(evt.target.value);
                    }}/> */}
            <SearchBar placeholder='请输入内容' showCancelButton={() => true} onChange={(evt)=>{
                        setmytext(evt.target.value);
                    }}/>
          {
            getCinemaList.map(item=>
            <dl key={item.cinemaId} style={{padding:"20px"}}>
              <dt>{item.name}</dt>
              <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
            </dl>)
          }
        </div>
      )
}
