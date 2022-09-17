import React, { Component } from 'react'
// 创建接口，约定规则
interface IState {
    text:string,
    list:Array<string>
}
export default class App extends Component<any,IState> {
    state = {
        text:"",
        list:[]
    }
    // 需要给ref进行约定的执行类型==>HTMLInputElement,要是放在div上则是HTMLDivElement
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
                (this.myref.current as HTMLInputElement).value // as ==> 断言 ==> 断定是什么类型
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
