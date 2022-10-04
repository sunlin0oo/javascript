import React, { Component } from 'react';
import Child from './components/Child';

class App extends Component {
    mytext = null;//临时变量
    render() {
        return (
            <div>
                <button onClick={()=>{
                    console.log(this.mytext);
                    this.mytext.current.focus();//获取焦点
                    this.mytext.current.value=''
                }}>获取焦点</button>
                <Child callback={(el)=>{
                    console.log('el',el);
                    this.mytext = el;
                }}></Child>
            </div>
        );
    }
}

export default App;