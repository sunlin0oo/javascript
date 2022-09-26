import React, { PureComponent } from 'react'
// 修改成PureComponent 也可以代替shouldComponentUpdate函数；但是有例外：例如一直在渲染变化的会导致变慢
export default class App extends  PureComponent {
    state = {
        myname:"xiaoming"
    }
  render() {
    // 只要调用setstate走一次生命周期render,UNSAFE_componentWillUpdate,componentDidUpdate都会走一遍
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                myname:"sunlin"
            })
        }}>Click</button>
        <div>{this.state.myname}</div>
      </div>
    )
  }
//   scu性能优化函数==>查看新老状态是否有变化==>阻止重复无意义的渲染
//   shouldComponentUpdate(nextProps,nextState){
//     // this.state 老状态
//     // nextState 新状态
//    //判断是否进行更新，false是阻止更新
//    if(this.state.myname !== nextState.myname){
//         return true;
//     }
//    return false;
//   }
  UNSAFE_componentWillUpdate(){
    console.log(" UNSAFE_componentWillUpdate")
  };
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
}
