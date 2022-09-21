import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname:"sunlin"
    }
    // 将要挂载--执行一次==>已经准备被移除了
    // 执意要使用componentWillMount==添加==>UNSFAE_componentWillMount
    // 可以进行逻辑计算
    componentWillMount(){
        console.log("第一次Willmount",this.state.myname,document.getElementById("myname"));
        // 第一次挂载上树前，最后一次修改状态机会!!!
        this.setState({
            myname:"sunlin0oo"
        })
        // 初始化数据的作用
    }

    // 挂载完毕--执行一次==>成功render并渲染完成真实DOM之后触发，可以修改DOM
    componentDidMount(){
        console.log("第一次DidMount",document.getElementById("myname"));
        // 可操作内容:
        // 数据axios请求
        // 订阅函数的调用
        // setInterval
        // 基于创建完的dom进行初始化  例如:....betterscroll(之前的操作是通过setState第二个参数进行操作)
     }
    //初始化阶段 render函数会自动执行
  render() {
    console.log("render")
    return (
      <div>App</div>
    )
  }
}
