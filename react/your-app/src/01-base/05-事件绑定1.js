import React,{Component} from 'react'

export default class App extends Component{
    render(){
        return(
            <div>
                 <input />
                 {/* 点击事件加一个处理函数 */}
                 <button onClick={()=>{
                    console.log("click1")
                 }}>add</button>

                 <button onMouseMove={()=>{
                    console.log("click2")
                 }}>move</button>

                {/* 不要主动用()去执行函数 */}
                <button onClick={this.handleClick1 }>add3</button>
                <button onClick={()=>{
                    this.handleClick2();//比较推荐
                }}>add4</button>
            </div>
        )
    }

    handleClick1(){
        console.log("click3")
    }

    handleClick2=()=>{
        console.log("click4")
    }

    handleClick3=()=>{
        console.log("click5")
    }
}

class A{
    constructor(){
        this.a = "!1111";
        this.b = "22222";
    }

    c = 33333;
    d = ()=>{

    }

    aaa(){

    }

    bbb(){
        
    }

    ccc(){
        
    }
}

console.log(new A());