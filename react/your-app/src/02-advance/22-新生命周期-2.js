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

  componentDidUpdate(prevProps,prevState,value){
    console.log("componentDidUpdate",value)
  }

  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate")
    return 100;
  }
  //render==>getSnapshotBeforeUpdate==>componentDidUpdate
}
