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
  // 每次调用setstate，会走此生命阶段，可以判断新老状态是否有变化，阻止频繁更新
  // scu 也就是shouldComponentUpdate 
  shouldComponentUpdate(nextProps,nextState){
    // this.state 老状态
    // nextState 新状态
   //判断是否进行更新，false是阻止更新
   console.log('shouldComponentUpdate')
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
