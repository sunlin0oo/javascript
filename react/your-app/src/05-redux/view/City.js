import React, { useState } from 'react'
import store from '../redux/store'
/**Redux整体流程：
 * 1.(App.js) 进行 store.subsribe订阅
 * 2.进入detail页面创建Detail组件触发dispatch 发送action
 *   当(Detail)创建时，触发useEffect==>store.dispatch==>actionCreator 获取：type:"kerwinhide-tabbar" 
 *   当(Detail)销毁时时，触发useEffect==>store.dispatch==>actionCreator 获取：type:"kerwinshow-tabbar" 
 * 3.由store.js进行处理,发送action和prevState 到reducer中==>他会挨着去触发一遍，直到匹配相对应的type
 * 4.通过reducer返回新状态出去
 * 5.通知订阅者进行更新*/ 

export default function City(props) {
    const [list,setlist] = useState(['北京','上海','深圳','广州']);
  return (
    <div>
        city
        <ul>
            {
                list.map(item=>
                <li key={item} onClick={()=>{
                    store.dispatch({
                        type:"change-city",
                        payload:item,
                    })
                    // props.history.push(`/cinemas`)
                    // 回到上一个页面 也就是/cinemas 
                    props.history.goBack();
                }}>{item}</li>)
            }
        </ul>
    </div>
  )
}
