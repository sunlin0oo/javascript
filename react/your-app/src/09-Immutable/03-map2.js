import React, { Component } from 'react'
import{Map} from'immutable';
export default class App extends Component {
    state = {
        info:Map({
            name:"sunlin",
        select:"aa",
        // 对于复杂的多层需要再套一层Mao
        filter:Map({
            text:"",
            up:true,
            down:false
        }) 
        })
    }

    componentDidMount(){
        console.log(this.state.info.get('filter'));
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                info:this.state.info.set("name","sunzif")
            })
        }}>Click</button>
        {this.state.info.get("name")};
        <Child filter={this.state.info.get("filter")}></Child>
      </div>
    )
  }
}


class Child extends Component{
    // 点击时会更新，导致Child孩子发生更新
    // 通过shouldComponentUpdate判断（老属性与新属性进行比较）filter是否发生改变，从而阻断更新
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.filter === nextProps.filter){
            return false
        }
        return true
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    render(){
        return(
            <div>
                Child
            </div>
        )
    }
}
