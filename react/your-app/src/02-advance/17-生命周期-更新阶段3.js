import React, {Component } from 'react'
class Child extends Component{
    state={
        title:""
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.props.text === nextProps.text) return false;
    //     return true;
    // }
    render(){
        return <div>
            {
                console.log('render')
            }
            Child-{this.state.title}
        </div>
    }
    // 父组件生命周期的更新会引发，孩子组件生命周期的更新
    // 只能应用于孩子组件
    componentWillReceiveProps(nextPropos){
        console.log("this.props.text::",this.props.text);//老状态
        console.log("nextPropos.text::",nextPropos.text);//新状态
        // 最先获得父组件传来的属性，可以利用属性进行ajax或者逻辑处理
        // 把属性转换成孩子自己的状态
        this.setState({
            title:nextPropos.text+"sunlin"
        })
    }
}
export default class App extends Component {
    // 也会阻止componentWillReceiveProps进行
    shouldComponentUpdate(nextProps, nextState){
        if(this.state.text === nextState.text) return false;
        return true;
    }
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
