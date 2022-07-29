import React, { Component } from 'react'
import BetterScroll from 'better-scroll'
export default class App extends Component {
    state = {
        list:['111','465465','123','13121','4321465','123123','123165','11312','465315','1213','4123465','131','1235','31231','461325']
    }

    // componentWillmount(){

    // }

    componentDidMount(){
        // DOM创建完后去进行BetterScroll
        new BetterScroll("#wrapper")
    }
  render() {
    return (
      <div>
        <div id="wrapper" style={{background:"yellow",height:"200px",overflow:"hidden"}}>
            <ul>
                {
                    this.state.list.map((item)=><li key={item}>{item}</li>)
                }
            </ul>
        </div>
      </div>
    )
  }
}
