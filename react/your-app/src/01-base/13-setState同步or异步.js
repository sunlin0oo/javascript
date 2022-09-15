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
        <button onClick={this.handlerClick3}>add3</button>
        <button onClick={this.handlerClick4}>add4</button>
        <button onClick={this.handlerClick5}>add5</button>
      </div>
    )
  }
//   Setstate是异步更新状态，异步更新真实dom
// handlerClick1是没有做任何设置，纯进行setstate设置
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
// React17 中此代码是同步 点击一次是2 3 4  再是5 6 7
// 但是在React18中此代码仍是异步

  handlerClick2=()=>{
    setTimeout(()=>{
      this.setState({
          count:this.state.count+1
      })

      console.log(this.state.count)

      this.setState({
          count:this.state.count+1
      })

      console.log(this.state.count)

      this.setState({
          count:this.state.count+1
      })

      console.log(this.state.count)
  },0)
  }

//   setState接收第二个参数，第二个参数是回调函数，状态和dom更新完后会被触发
  handlerClick3=()=>{
    this.setState({
        count:this.state.count + 1
    },()=>{
      // 第二个参数是回调函数，状态和dom更新完后会被触发
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

  handlerClick4=()=>{
    this.setState({
        count:this.state.count + 1
    },()=>{
      // 第二个参数是回调函数，状态和dom更新完后会被触发
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

  handlerClick5=()=>{
    this.setState({
        count:this.state.count + 1
    },()=>{
      // 第二个参数是回调函数，状态和dom更新完后会被触发
        console.log(this.state.count)

        this.setState({
          count:this.state.count + 1
      },()=>{
          console.log(this.state.count)

          this.setState({
            count:this.state.count + 1
        },()=>{
            console.log(this.state.count)
        }) ;
      });
    });
  }
} 
