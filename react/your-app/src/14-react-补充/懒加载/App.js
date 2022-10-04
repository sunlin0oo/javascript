import React, { Component, Suspense } from 'react';
// import Comingsoon from './conponents/Comingsoon';
// import Nowplaying from './conponents/Nowplaying';
// 懒加载
const Nowplaying = React.lazy(()=>import('./conponents/Nowplaying'));
const Comingsoon = React.lazy(()=>import('./conponents/Comingsoon'));
class App extends Component {
    state={
        type:1
    }
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        type:1
                    })
                }}>正在热映</button>
                <button onClick={()=>{
                    this.setState({
                        type:2
                    })
                }}>即将上映</button>
                {/* 将懒加载加在suspense中 */}
                <Suspense fallback={<div>正在加载中...</div>}>
                    {
                        this.state.type === 1?
                        <Nowplaying></Nowplaying>:
                        <Comingsoon></Comingsoon>   
                    }
                </Suspense>
              
            </div>
        );
    }
}

export default App;