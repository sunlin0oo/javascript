// 这样引用{Component}可以不用写React.Component
import React,{Component} from "react";
// App是根组件
class Navbar extends Component{
    render(){
        return <div>Navbar
            <Child></Child>
        </div>
    }
}
// Child组件是Navbar的孩子，不可以写在爷爷(App)
function Child(){
    return <div>Child</div>
}

function Swiper(){
    return <div>Swiper</div>
}

const Tabbar = ()=>{
    return <div>Swiper</div>
}

export default class App extends Component{
    render(){
        return(
            <div>
                {/* 下面三个是子组件 */}
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}