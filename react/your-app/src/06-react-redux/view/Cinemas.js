import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
// import store from '../redux/store';
import {getCinemaListAction} from '../redux/actionCreator/getCinemaListAction'
function Cinemas(props) {
  // 这里store.getState().cityName获取由redux到最新的数据
  // 拆开调用多了一层，相当于子redux是子空间，需要多套一层
  // const [cityName, setcityName] = useState(store.getState().CityReducer.cityName);
  // // const [cityName, setcityName] = useState(store.getState().cityName);

  // const [CinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list);
let {list,getCinemaListAction} = props;
useEffect(()=>{
    // console.log('CinemaListReducer' ,store.getState().CinemaListReducer);
    if(list.length === 0){
      // 去后台取数据==>actionCreator 里写异步
      // store.dispatch(getCinemaListAction())
      getCinemaListAction();
    }else{
      console.log("store缓存")
    }

},[list,getCinemaListAction])


  return (
    <div>
       <div>
        <div onClick={()=>{
        props.history.push(`/city`);
      }}>{props.cityName}</div>
      <div style={{float:'right'}} onClick={()=>{
        props.history.push(`/cinemas/search`)
      }}>搜索</div>
    </div>
    
      {
        props.list.map(item=>
        <dl key={item.cinemaId} style={{padding:"20px"}}>
          <dt>{item.name}</dt>
          <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
        </dl>)
      }
    </div>
  )
}
const  mapStateToProps=(state)=>{
  return{
    list:state.CinemaListReducer.list,
    cityName:state.CityReducer.cityName
  }
}

const  mapDispatchToProps={
  getCinemaListAction
}
export default connect(mapStateToProps,mapDispatchToProps)(Cinemas)