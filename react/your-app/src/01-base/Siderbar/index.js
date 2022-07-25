// rfc
import React from 'react'

export default function Siderbar(props) {
  let {bg,position} = props;
  console.log(bg)
  var obj1 = {
    left:0
  }

  var obj2 = {
    right:0
  }

  var obj3 ={
    background:bg,
    width:"200px",
    position:'fixed',
  }

  var styleobj = position ==='left'?{...obj3,...obj1}:{...obj3,...obj2}

  return (
    // 修改背景颜色
    <div style={styleobj}>
        <ul>
            <li>11111111111111</li>
            <li>11111111111111</li>
            <li>11111111111111</li>
            <li>11111111111111</li>
            <li>11111111111111</li>
            <li>11111111111111</li>
            <li>11111111111111</li>
            <li>11111111111111</li>
            <li>11111111111111</li>
            <li>11111111111111</li>
            <li>11111111111111</li>
            <li>11111111111111</li>
        </ul>
    </div>
  )
}
