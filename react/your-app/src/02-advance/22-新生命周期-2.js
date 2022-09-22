import React, { Component } from 'react'

export default class App extends Component {
    state = {
        mytext:"11111"
    }
  render() {
    console.log("render")
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                mytext:"222222"
            })
        }}>Click</button>
        {this.state.mytext}
      </div>
    )
  }

  // componentWillUpdate(){
  //   console.log('componentWillUpdate');
  // }

  componentDidUpdate(prevProps,prevState,value){
    console.log("componentDidUpdate",value)
  }
// 可代替componentWillUpdate==>可以记录信息状态给DidUpdate 
  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate")
    return 100;
  }
  
  //render==>getSnapshotBeforeUpdate==>componentDidUpdate
}
