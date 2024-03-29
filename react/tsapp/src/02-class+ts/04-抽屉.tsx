import React, { Component } from 'react'

export default class App extends Component {
    state = {
        isShow:true
    }
  render() {
    return (
      <div>
        {/* 给Navbar组件 挂载属性 */}
        <Navbar title='首页' cb={()=>{
            this.setState({
                isShow:!this.state.isShow
            })
        }}></Navbar>

        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    )
  }
}

// 添加接口限制
interface IProps{
    title:string,
    cb:()=>void
}

class Navbar extends Component<IProps,any>{
    render(){
        return <div>
            navbar-{this.props.title}
            {/* 调用回调函数 */}
            <button onClick={()=>{
                this.props.cb();
            }}>Click</button>
        </div>
    }
}

class Sidebar extends Component<any,any>{
    render(){
        return <div>
            Sidebar
        </div>
    }
}
