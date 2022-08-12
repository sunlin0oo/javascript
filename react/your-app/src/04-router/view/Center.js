import React from 'react'
import { withRouter } from 'react-router-dom';
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
// 专门给孩子传输history
export default withRouter(Center)
