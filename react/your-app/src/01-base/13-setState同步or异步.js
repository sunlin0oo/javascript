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
/**
 * setState处于同步逻辑中 异步更新状态，更新真  实dom
 * setState处于异步逻辑中 同步新状态，更新真实dom
 * setState接收第二个参数，第二个参数是回调函数，状态和dom更新完后会被触发
 */
