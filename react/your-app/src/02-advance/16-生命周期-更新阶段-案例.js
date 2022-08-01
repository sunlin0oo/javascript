import React, { Component } from 'react'

class Box extends Component{
    // 只更新上一次选中的this.props.current === this.props.index 及  这一次选中的nextProps.current === nextProps.current
    shouldComponentUpdate(nextProps){
        if(this.props.current === this.props.index || nextProps.current === nextProps.current) return true;
        return false;
    }
    render(){
        return <div style={{
            width:"100px",
            height:"100px",
            border:this.props.current === this.props.index?"5px solid red":"1px solid gray",
            margin:"10px"}}>
        </div>
    }
}

export default class App extends Component {
    state = {
        list:["00","01","02","03","04","05","06","07","08","09"],
        current:0
    }
  render() {
    return (
      <div style={{overflow:"hidden"}}>
        <input type="number" onChange={(evt)=>{
            this.setState({
                current:Number(evt.target.value)//这里拿到的是字符串,重新进行转换
            })
        }} value={this.state.current}/>
        {/* 设置初始值 */}
        {
            this.state.list.map((item,index)=>
                <Box key={item} current={this.state.current} index ={index}/>
            )
        }
      </div>
    )
  }
}
