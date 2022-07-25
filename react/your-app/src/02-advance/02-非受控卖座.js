import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuoComponent/Film'
import Cinema from './maizuoComponent/Cinema'
// import Cinema from './15-betterscroll-c'
import Center from './maizuoComponent/Center'
import Tabbar from './maizuoComponent/Tabbar'
import Navbar from './maizuoComponent/Navbar'
export default class App extends Component {
    state = {
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
            <Navbar myevent={()=>{
                
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
            {/* 通过子组件的传参通知父组件改变状态 */}
            <Tabbar myevent={(index)=>{
                this.setState({
                    current:index,
                })
            }}></Tabbar>
        </div>
        )
    }
    
}
