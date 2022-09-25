import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text:'',
        list:['111','222','333']
    }
  render() {
    return (
      <div>
        <h1>todo-list</h1>
        <input onChange={(evt)=>{
            this.setState({
                text:evt.target.value
            })
        }}></input>
        <button className='add' onClick={()=>{
            this.setState({
                list:[...this.state.list,this.state.text]
            })
        }}>add</button>
        <ul>
            {
                this.state.list.map((item,index)=><li key={index}>{item}
                <button className='del' onClick={()=>{
                    let newlist = [...this.state.list];
                    // 删除数组中对应的第几个索引
                    newlist.splice(index,1);
                    this.setState({
                        list:newlist
                    })
                }}>del</button></li>)
            }
            {
                console.log(this.state.text)
            }
        </ul>
      </div>
    )
  }
}
