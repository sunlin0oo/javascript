import React, { Component } from 'react'

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

class Child extends Component{
    render(){
        return <div>
            child
        </div>
    }


    // 绑在window窗口的事件不会被销毁,除非手动进行清除
    componentDidMount(){
        window.onresize=()=>{
            console.log("resize");
        }
        
        this.time = setInterval(()=>{
            console.log("11111")
        },1000)
    }
    // 控制组件消失
    componentWillUnmount(){
        console.log("componentWillUnmount");
        // 除非将window事件给消除
        window.onresize = null;
        clearTimeout(this.time);
    }
}
