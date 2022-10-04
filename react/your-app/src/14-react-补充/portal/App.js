import React, { Component } from 'react';
import './css/App.css'
import Dialog from './components/Dialog'
import PortalDialog from './components/PortalDialog'
class App extends Component {
    state={
        isShow:false
    }
    render() {
        return (
            // portal冒泡问题：虽然DOM渲染在父节点之外，但是DOM树的整个流程是不变的，right中的点击函数触发会冒泡到父节点最外层;
            // 因为渲染节点仍在React元素书上
            <div className='box' onClick={()=>{
                console.log('box身上监听的事件');
            }}>
                <div className='left'></div>
                {/* 没有设置z-index层级的情况下，正常覆盖，但是一旦设置层级，就无法覆盖
                例如现在:left 层级 >right层级 ==><Dialog>组件无法发改left */}
                <div className='right'>
                    <button onClick={()=>{
                        this.setState({
                            isShow:!this.state.isShow
                        })
                    }}>ajax</button>
                    {this.state.isShow && <PortalDialog onClose={()=>{
                        this.setState({
                            isShow:!this.state.isShow
                        })
                    }}></PortalDialog>}                
                </div>
            </div>
        );
    }
}

export default App;