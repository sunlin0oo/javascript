import React, { Component } from 'react'

export default class App extends Component {
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
  shouldComponentUpdate(nextProps,nextState){
    // this.state 老状态
    // nextState 新状态
   //判断是否进行更新，false是阻止更新
   if(this.state.myname !== nextState.myname){
        return true;
    }
   return false;
  }
  UNSAFE_componentWillUpdate(){
    console.log(" UNSAFE_componentWillUpdate")
  };
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
}
