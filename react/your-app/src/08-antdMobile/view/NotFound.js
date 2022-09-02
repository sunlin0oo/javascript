import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function NotFound(props) {
  useEffect(()=>{
    console.log("NotFound-Props::",props)
  })
  return (
    <div>404 NotFound</div>
  )
}

function sunlinconnect(cb,obj){
  let value = cb()
  // 渲染劫持==>MyComponent === NotFound
  // 先return一个函数(MyComponent):参数:MyComponent
  return (MyComponent)=>{
    // return 一个函数式组件
    return (props)=>{
      return <div style={{color:"red"}}>
        <MyComponent {...value} {...props} {...obj}/>
      </div>
    }
  }
}

export default  sunlinconnect(()=>{
  return{
    a:1,
    b:2
  }
})(NotFound)
