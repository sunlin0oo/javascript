import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
export default class App extends Component {
    state = {
        list:[1,1]
    }
  render() {
    // 上一个父组件传来的对象
    var obj = {
        title:"测试",
        leftshow:false
    }
    return (
        <div>
           <div>
                <h2>首页</h2>
                {/* 如果js中的布尔类型,状态等传入到下一个组件中就需要使用{}==>作为js地盘去使用 */}
                <Navbar title="首页" leftshow={false} state={this.state}/>
            </div>
            <div>
                <h2>列表</h2>
                <Navbar title="列表" />
            </div>
            <div>
                <h2>购物车</h2>
                <Navbar title="购物车" />
            </div>
            <div>
                <h2>测试</h2>
                <Navbar title={obj.title}  leftshow={obj.leftshow}/>
                {/* 相同格式可以直接深复制 */}
                <Navbar {...obj} />
            </div>
        </div>
    )
  }
}

