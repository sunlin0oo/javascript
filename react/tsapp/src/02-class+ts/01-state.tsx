import React, { Component } from 'react'
interface IState{
    name:string
}
//export default class App extends Component<约定属性,约定状态> {

export default class App extends Component<any,IState> {
    state = {
        name:'sunlin'
    }
  render() {
    return (
        <div>
            App-{this.state.name.substring(0,1).toUpperCase()
            +this.state.name.substring(1)}
            <button onClick={()=>{
            this.setState({
                name:'sunzif'
                // name:100 就会报错
            })
            }}>Click</button>
        </div>
    )
  }
}
