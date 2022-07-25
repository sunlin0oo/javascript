import React, { Component } from 'react'
// 提取 状态及高亮部分 为单独组件
// export default class Tabbar extends Component {
//     state = {
//         // 这里的current状态由父组件来控制
//     }

//   render() {
//     return (
//       <div>
//         <ul>
//                 {
//                     this.props.list.map((item,index)=>
//                     <li key={item.id} 
//                     className={this.props.current === index ?'active':''} 
//                     onClick={()=>this.handlerClick(index)}
//                     >
//                         {item.text}
//                     </li>)
//                 }
//             </ul>
//       </div>
//     )
//   }

//     handlerClick(index){
//         this.setState({
//             current:index
//         })

//         // 通知父组件，修改父组件状态
//         this.props.myevent(index);
//     }
// }

// 函数式组件
const Tabbar = (props)=>{
       console.log("props",props);
    // function handlerClick(index){
    //     // 通知父组件，修改父组件状态
    //     props.myevent(index);
    // };

    return (
        <div>
        <ul>
                {
                    props.list.map((item,index)=>
                    <li key={item.id} 
                    className={props.current === index ?'active':''} 
                    onClick={()=>props.myevent(index)}
                    >
                        {item.text}
                    </li>)
                }
            </ul>
        </div>
    )
}
export default Tabbar
