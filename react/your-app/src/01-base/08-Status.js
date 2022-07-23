import React, { Component } from 'react'
// 状态定义方式1
// export default class App extends Component {
//     // state是固定写法
//     state = {
//         mytext:"收藏",
//         myshow:true,
//     }
//   render() {
//     return (
//       <div>
//         <h1>欢迎开发</h1>
//         <button onClick={()=>{
//             //  不可以在点击事件中直接点击，如果直接更改的话，react是无法得知的，所以，需要使用特殊的更改状态的方法 setState 
//             this.setState({
//                 myshow:!this.state.myshow
//             })//间接修改状态
//         }}>{this.state.myshow?"收藏":"取消收藏"}</button>
//       </div>
//     )
//   }
// }

export default class App extends Component {
    constructor(){
        // 因为继承了Component，用super超类继承
        super()
        // state是固定写法
        this.state = {
            mytext:"收藏",
            myshow:true,
            myname:"dasda"
        }
    }
  render() {
    return (
      <div>
        <h1>欢迎开发-{this.state.myname}</h1>
        <button onClick={()=>{
            //  不可以在点击事件中直接点击，如果直接更改的话，react是无法得知的，所以，需要使用特殊的更改状态的方法 setState 
            // 可以改变多种状态
            this.setState({
                myshow:!this.state.myshow,
                myname:"asdada"
            })//间接修改状态
        }}>{this.state.myshow?"收藏":"取消收藏"}</button>
      </div>
    )
  }
}
