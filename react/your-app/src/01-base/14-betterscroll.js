/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {
    state = {
        list:[]
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.getData()}>click</button>
                {/* 注意这里的两个括号，第一个表示我们在要JSX里插入JS了，第二个是对象的括号 */}
                <div className="kerwinwrapper" style={{height:'200px',background:'yellow',overflow:'hidden'}}>
                    <ul className="kerwincontent">
                       {
                           this.state.list.map(item=>
                           <li key={item}>{item}</li>
                            )
                       }
                    </ul>
                </div>
            </div>
        )
    }

    getData(){
        var list =[1,2,3,4,5,6,7,8,9,0,11,12,13,14,15]
        //在setState第二个参数中，进行操纵DOM，因为那时候DOM更新完成
        // this.setState({
        //     list:list
        // },()=>{
        //     console.log(this.state.list)
        //     console.log(document.querySelectorAll("li"))
        //     new BetterScroll(".kerwinwrapper")
        // })

        //这里可以立即更新！
        setTimeout(()=>{
            this.setState({
                list:list
            })

            console.log(this.state.list)
            console.log(document.querySelectorAll("li"))
            new BetterScroll(".kerwinwrapper")
        },0)
    }
}
