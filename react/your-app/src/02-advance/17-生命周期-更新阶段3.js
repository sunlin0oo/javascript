import React, {Component } from 'react'
class Child extends Component{
    state={
        title:""
    }
    render(){
        return <div>
            Child-{this.state.title}
        </div>
    }
    // 父组件生命周期的更新会引发，孩子组件生命周期的更新
    componentWillReceiveProps(nextPropos){
        console.log("this.props.text::",this.props.text);//老状态
        console.log("nextPropos.text::",nextPropos.text);
        // 最先获得父组件传来的属性，可以利用属性进行ajax或者逻辑处理
        // 把属性转换成孩子自己的状态
        this.setState({
            title:nextPropos.text+"sunlin"
        })
    }
}
export default class App extends Component {
    state={
        text:"11111"
    }
  render() {
    return (
      <div>
        {
            this.state.text
        }
        <button onClick={()=>{
            this.setState({
                text:"@2222222"
            })
        }}>Click</button>
        <Child text={this.state.text}/>
      </div>
    )
  }
}
