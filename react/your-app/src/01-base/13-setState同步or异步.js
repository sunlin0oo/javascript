import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count:1
    }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handlerClick1}>add1</button>
        <button onClick={this.handlerClick2}>add2</button>
        <button onClick={this.handlerClick3}>add2</button>
      </div>
    )
  }
//   Setstate是异步更新状态，异步更新真实dom
  handlerClick1=()=>{
    this.setState({
        count:this.state.count + 1
    })

    console.log(this.state.count)

    this.setState({
        count:this.state.count + 1
    })

    console.log(this.state.count)

    this.setState({
        count:this.state.count + 1
    })

    console.log(this.state.count)
  }
//   setState处于异步逻辑中 同步新状态，同步更新真实dom
  handlerClick2=()=>{
    setTimeout(()=>{
        this.setState({
            count:this.state.count + 1
        })
    
        console.log(this.state.count)
    
        this.setState({
            count:this.state.count + 1 
        })
    
        console.log(this.state.count)
        
        this.setState({
            count:this.state.count + 1
        })
    
        console.log(this.state.count)
    },0)
  }
//   setState接收第二个参数，第二个参数是回调函数，状态和dom更新完后会被触发
  handlerClick3=()=>{
    this.setState({
        count:this.state.count + 1
    },()=>{
        console.log(this.state.count)
    });

    this.setState({
        count:this.state.count + 1
    },()=>{
        console.log(this.state.count)
    });

    this.setState({
        count:this.state.count + 1
    },()=>{
        console.log(this.state.count)
    }) ;
  }
} 
