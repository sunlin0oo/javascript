import React, { Component } from 'react';
import Child from './components/Child-forward';

class App extends Component {
    mytext = React.createRef();//临时变量
    render() {
        return (
            <div>
                <button onClick={()=>{
                    console.log('this.mytext',this.mytext);
                    this.mytext.current.focus();
                    this.mytext.current.value=''
                }}>获取焦点</button>
                {/* 将ref记载组件身上==>可以对组件内部标签进行透传 */}
                <Child ref={this.mytext}></Child>
            </div>
        );
    }
}

export default App;