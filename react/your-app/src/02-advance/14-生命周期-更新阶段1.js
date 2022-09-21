import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default class App extends Component {
    state = {
        myname:"sunlin",
        list:[],
    }

    componentDidMount(){
        // React17 同步，但是18中均是异步，只能通过setState中的第二个参数进行操作
        // 异步==>等会去看同步异步相关知识
        axios.get(`/test.json`).then(res=>{
            console.log(res.data.data.films);
            // 同步更新到DOM中
            this.setState({
                list:res.data.data.films
            },()=>{
                // 访问到真实的DOM
                console.log("this.state.list:",this.state.list);
                // new BetterScroll("#warpper");
            }) 
            console.log("this.state.list::",this.state.list); 
        })
       
    }

    render() {
      console.log("render")
      return (
          <div>
              <button onClick={()=>{
                  this.setState({
                      myname:"tiechui"
                  })
              }}>click</button>
              <span id="myname">{this.state.myname}</span>

              <div id="warpper" style={{
                  height:"100px",overflow:"hidden",background:"yellow"
              }}>
                  <ul>
                      {
                          this.state.list.map(item=>
                          <li key={item.filmId}>{item.name}</li>    
                          )
                      }
                  </ul>
              </div>
              {console.log("this.state.list::::",this.state.list)}
          </div>
      )
  }
//   将会被弃用
  // componentWillUpdate(){
  //   // 未更新数据之前==>拿的老状态 myname
  //   console.log("componentWillUpdate",document.getElementById("myname").innerHTML);
  // }
// 两个形参名字随意，分别代表老属性，老状态
  componentDidUpdate(prevProps,prevState){
    // 已更新==>拿的新状态 myname 
    console.log("componentDidUpdate",document.getElementById("myname").innerHTML);
    // 更新后，获取真实DOM节点，这里在这里对DOM节点进行操作

    // 例如在这里对BetterScroll 进行设置操作
    // new BetterScroll("#warpper");

    // // 避免多次更新调用
    // console.log(prevState.list);
    // 只执行一次，在之后数据再进行更新时，就不会再new
    // if(prevState.list.length === 0)new BetterScroll("#warpper");
  }
}
