import React, { Component } from 'react'
import "./css/04-clear.css"
export default class App extends Component {
    state = {
        list:[1,2,3,4,5,6,7,8,9]
    }
    // 挂载==>通过myref获取到dom节点==>current属性访问到对应节点方法
    myref = React.createRef();
    //  scrollTop = 此时容器高度 - willupdate记录的容器高度 
    // 这是未改变之前
    getSnapshotBeforeUpdate(){
        // 获取原容器（未改变前）高度
        console.log('未改变前:', this.myref.current.scrollHeight);
        // scrollHeight：获取滚动条的高度
        return this.myref.current.scrollHeight;
    }
    // 改变之后==>获取变化侯容器高度
    componentDidUpdate(prevProps,prevState,value){
        console.log('改变后：', this.myref.current.scrollHeight);
        // 高度差this.myref.current.scrollHeight - value
        // 方法返回或设置匹配元素的滚动条的垂直位置
        this.myref.current.scrollTop += this.myref.current.scrollHeight - value
    }

  render() {
    return (
      <div>
        <button onClick={()=>{
            // 新数组来，添加在前面
            this.setState({
                list:[...[11,22,33,44,55,66,77,88],...this.state.list]
            })
        }}>来邮件</button>
        <div>邮箱应用</div>
        <div style={{height:"200px",overflow:"auto"}} ref={this.myref}>
            <ul >
            {
                this.state.list.map((item,index)=>
                <li key={index} style={{height:"100px",background:"yellow"}}>{item}</li>
                )
            }
            </ul>
        </div>
      </div>
    )
  }
}
