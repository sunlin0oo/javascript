import React, { Component } from 'react';
import { createPortal } from 'react-dom'
class App extends Component {
    render() {
        // 这样进行操作的话不会创建在 root的div下，而是创建在外面与root-div平级，在外面
        return createPortal(
            <div style={{width:'100%',height:'100%',position:'fixed',
            left:0,top:0,background:'rgba(0,0,0,0.7)',zIndex:'9999'}}>
                Dialog
            <div>loading-正在加载</div>
            <button onClick={()=>{
                this.props.onClose()// 点击回调函数，触发函数，导致父组件的isShow发生变化
            }}>close</button>
            </div>,document.body);
    }
}

export default App;