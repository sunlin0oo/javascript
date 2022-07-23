import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuoComponent/Film'
import Cinema from './maizuoComponent/Cinema'
import Center from './maizuoComponent/Center'
export default class App extends Component {
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
            <ul>
                {
                    this.state.list.map((item,index)=>
                    <li key={item.id} 
                    className={this.state.current === index ?'active':''} 
                    onClick={()=>this.handlerClick(index)}
                    >
                        {item.text}
                    </li>)
                }
            </ul>
        </div>
        )
    }
    
    handlerClick(index){
        this.setState({
            current:index
        })
  }
}
