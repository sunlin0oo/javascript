import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname:"sunlin"
    }
    //这个生命周期可以涵盖，第一次和更新==>不可以写异步方法
    // 将初始化可代替componentDidMount()；父传子可代替componentWillReceiveProps()
    static getDerivedStateFromProps(nextProps,nextState){
        // 在这里拿不到this.state 静态 没有this
        console.log("getDrivedStateFromProps",nextState);
        return{
            // 同名的状态的会覆盖，不同名的状态会延续==>通过nextState进行改变
            // myname:"Sunlin"
            myname:nextState.myname.substring(0,1).toUpperCase() + nextState.myname.substring(1)//将首字母都进行大写
        }
    }
  render() {
        return (
        <div>
            {/* 会固定住不会进行变化 */}
            <button onClick={()=>{
                this.setState({
                    myname:"xiaoming"
                })
            }}></button>
            app-{this.state.myname}
        </div>
        )
    }
}
