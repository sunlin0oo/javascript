import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default class App extends Component {
    state = {
        myname:"sunlin",
        list:[],
    }

    componentDidMount(){
        // 异步==>等会去看同步异步相关知识
        axios.get(`/test.json`).then(res=>{
            console.log(res.data.data.films);
            // 同步更新到DOM中
            this.setState({
                list:res.data.data.films
            },()=>{
                // 访问到真实的DOM
                console.log("this.state.list:",this.state.list);
                new BetterScroll("#warpper");
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
  // componentWillUpdate(){
  //   // 未更新==>拿的老值
  //   console.log("componentWillUpdate",document.getElementById("myname").innerHTML);
  // }
  componentDidUpdate(prevProps,prevState){
    // 已更新==>拿的新值
    console.log("componentDidUpdate",document.getElementById("myname").innerHTML);
    // 更新后，获取DOM节点，

    // // 避免多次更新调用
    // console.log(prevState.list);
    // if(prevState.list.length === 0)new BetterScroll("#warpper");
  }
}
