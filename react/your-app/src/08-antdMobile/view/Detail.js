import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { show, hide } from '../redux/actionCreator/TabbaractionCreator';
// import store from '../redux/store'

function Detail(props) {
  let {show,hide,match} = props;
  useEffect(()=>{
    console.log('create')
    console.log(match.params.myid,"利用id去后端拿数据")
    // store.dispatch 通知
    // store.dispatch(hide());
   hide();
    return ()=>{
      console.log('destory')
      // store.dispatch(show())
      show();
    }
  },[match.params.myid,show,hide])
  // 动态路由传参
  // console.log(props.match.params.myid,"利用id去后端拿数据")
  console.log(match.params.myid,"利用id去后端拿数据")
  // query传参
  // console.log(props.location.query.id,"利用id去后端拿数据")
  // state传参
  // console.log(props.location.state.myid,"利用id去后端拿数据")
  return (
    <div>Detail</div>
  )
}
const mapDispatchToProps = {
  show,
  hide
}
// connect(将来给孩子传的属性，将来给孩子传的回调函数)(孩子)
export default connect(null,mapDispatchToProps)(Detail);

