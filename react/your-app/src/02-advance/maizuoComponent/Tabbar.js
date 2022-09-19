import React, { Component } from 'react'
// 提取 状态及高亮部分 为单独组件
export default class Tabbar extends Component {
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
        // 子状态
        current:0// 默认的初始值
    }

  render() {
    return (
      <div>
        <ul>
                {
                    this.state.list.map((item,index)=>
                    <li key={item.id}
                    // 当前current 是否与 index相匹配 true:active标红
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
        // 将点击的数组索引传递给父组件的回调函数，修改父组件状态
        this.props.myevent(index);
    }
}
