import React, { useState } from 'react'
import { connect } from 'react-redux';
import store from '../redux/store'

function City(props) {
    const [list,setlist] = useState(['北京','上海','深圳','广州']);
  return (
    <div>
        city

        <ul>
            {
                list.map(item=>
                <li key={item} onClick={()=>{
                    // store.dispatch({
                    //     type:"change-city",
                    //     payload:item,
                    // })
                    props.change(item);
                    // props.history.push(`/cinemas`)
                    // 回到上一个页面 也就是/cinemas 
                    props.history.goBack();
                }}>{item}</li>)
            }
        </ul>
    </div>
  )
}
const mapDispatchToProps = {
    change(item){
        return{
            type:"change-city",
            payload:item,
        }
    }
}
// 通过connect  将回调函数mapDispatchToProps作为属性,传给city，调用change，并将item传入，然后connect==>dispatch
export default connect(null,mapDispatchToProps)(City)
