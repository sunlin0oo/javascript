import React, { Component } from 'react'
interface IState {
    text:string,
    list:Array<string>
}
export default class App extends Component<any,IState> {
    state = {
        text:"",
        list:[]
    }
    // 需要给ref执行类型(HTMLInputElement)
    myref = React.createRef<HTMLInputElement>()
  render() {
    return (
      <div>
        {/* <input type='text' value={this.state.text} onChange={(evt)=>{
            this.setState({
                text:evt.target.value
            })
        }}></input> */}

        <input ref={this.myref}></input>
        <button onClick={()=>{
            console.log(
                (this.myref.current as HTMLInputElement).value // 断言，断定是什么类型
            )
            this.setState({
                list:[...this.state.list,(this.myref.current as HTMLInputElement).value]
            })
        }}>Click</button>
        {
            this.state.list.map((item,index)=><li key={index}>{item}</li>)
        }
      </div>
    )
  }
}
