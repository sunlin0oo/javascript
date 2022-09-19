import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuoComponent2/Film'
import Cinema from './maizuoComponent2/Cinema'
// import Cinema from './15-betterscroll-c'
import Center from './maizuoComponent2/Center'
import Tabbar from './maizuoComponent2/Tabbar'
import Navbar from './maizuoComponent2/Navbar'
export default class App extends Component {
    // 保持初始时Film组件页
    state = {
        list:[
            {
                id:1,
                text:"电影"
            },{
                id:2,
                text:"影院"
            },{
                id:3,
                text:"我的"
            },
        ],
        current:0
    }

    which(){
        switch (this.state.current){
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>

            default:
                return null;
        }
    }

    render() {
        return (
        <div>
            {/* 导航页，回调函数点击"我的"   会 回调到 Center页面 */}
            <Navbar myevent={()=>{
                this.setState({
                    current:2
                })
            }}></Navbar>
            {/* {
                this.setState.current === 0 && <Film></Film>
            }
            {
                this.setState.current === 1 && <Cinema></Cinema>
            }
            { 
                this.setState.current === 2 && <Center></Center>
            } */}

            {   
            // 函数表达式
                this.which()
            }
            {/* 通过子组件的传参通知父组件改变状态
                将父组件的状态转递给子组件 */}
            <Tabbar 
            myevent={(index)=>{
                this.setState({
                    current:index,
                })
            }}
            // 将修改的current传递给Tabbar 从而修改高亮
            current={this.state.current} list = {this.state.list}></Tabbar>
        </div>
        )
    }
    
}
