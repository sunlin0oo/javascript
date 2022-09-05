import React, { Component } from 'react'
import{Map,List} from 'immutable'
export default class App extends Component {
    state = {
        info:Map({
            name:"kerwin",
            location:Map({
                province:"辽宁",
                city:"大连"
            }),
            favor:List(["读书","看报","写代码"])
        })
    }
  render() {
    return (
      <div>
        <h1>个人信息修改</h1>
        {/* 老状态可用的状况下去进行新状态的修改 */}
        <button onClick={()=>{
            this.setState({
                info:this.state.info.set("name",'xiaoming').
                // 先获取到loction Map结构，再进行修改
                set('location',this.state.info.get('location').set('city','沈阳'))
            })
        }}>修改</button>
        <br/>
        <div>
            {this.state.info.get('name')};
            {
                this.state.info.get('location').get('province')
            };
            -
            {
                this.state.info.get('location').get('city')
            };
            {
                this.state.info.get('favor').map((item,index)=>
                    (<li key={item}>{item}
                    <button onClick={()=>{
                        console.log(index);

                        this.setState({
                            // 设置新状态
                            info:this.state.info.set('favor',
                            // 获取到老状态
                            this.state.info.get('favor').
                            splice(index,1))
                        })
                    }}>del</button></li>)
                )
            }
        </div>
        
      </div>
    )
  }
}
