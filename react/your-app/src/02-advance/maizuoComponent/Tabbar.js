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
        current:0
    }

  render() {
    return (
      <div>
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

        // 通知父组件，修改父组件状态
        this.props.myevent(index);
    }
}
