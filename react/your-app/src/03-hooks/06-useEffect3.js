import React, { Component, useEffect } from 'react'

export default class App extends Component {
    state = {
        isCreated:true
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                isCreated:!this.state.isCreated
            })
        }}>Click</button>
        {/* {this.state.isCreated?<Child/>:""} */}
        {this.state.isCreated && <Child/>}
      </div>
    )
  }
}

function Child (){
    useEffect(()=>{
        window.onresize=()=>{
            console.log("resize");
        }
        
        var timer = setInterval(()=>{
            console.log("11111")
        },1000) 
        
         // 相当于执行一次，执行销毁的操作
        return()=>{
            console.log('组件销毁')
            window.onresize = null;
            clearInterval(timer);
        }
       
    },[])

   


    return <div>
        child
    </div>

}
