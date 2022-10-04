import React, { Component, PureComponent } from 'react';
import Child from './components/Child';
// PureComponent 只能用于class组件，memo之恩用于functional组件
class App extends Component {
    state={
        name:'sunlin',
        title:'aaaaa'
    }
    render() {
        return (
            <div>
                {this.state.name}
                <button onClick={()=>{
                    this.setState({
                        name:'sunzifeng'
                    })
                }}>改名</button>
                {/* 如果函数式没有使用memo，状态更新，组件重新更新;
                反之如果没有涉及到组件的更新，组件不会进行更新，有改变才会进行更新
                 */}
                <Child title={this.state.title}></Child>
                <button onClick={()=>{
                    this.setState({
                        title:'bbbbbbb'
                    })
                }}>修改title</button>
            </div>
        );
    }
}

export default App;