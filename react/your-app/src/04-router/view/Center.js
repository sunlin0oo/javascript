import React from 'react'
import { withRouter } from 'react-router-dom';
// 当indexRouter中没传props
function Center(props) {
  return (
    <div>
      Center

      <div onClick={()=>{
        props.history.push(`/filmsorder`);
        console.log('center中props',props);
      }}>电影订单</div>
    </div>
  )
}

// 专门给孩子传输history等属性值
export default withRouter(Center)
