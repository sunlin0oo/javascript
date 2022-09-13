import React, { Component } from 'react'

export default class App extends Component {
    state = {
        isShow:true
    }
  render() {
    return (
      <div>
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
interface IProps{
    title:string,
    cb:()=>void
}
class Navbar extends Component<IProps,any>{
    render(){
        return <div>
            navbar-{this.props.title}
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
