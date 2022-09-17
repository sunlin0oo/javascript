import React, { useState } from 'react'

export default function App() {
    const [isShow,setIsShow] = useState<Boolean>(true);
  return (
    <div>
        <Navbar title='首页'
        callback={()=>{
            console.log(!isShow);
            setIsShow(!isShow);
        }}></Navbar>
        
        {isShow && <Sidebar></Sidebar>}
    </div>
  )
}
interface IProps{
    title?:String,//?==>可选
    callback:()=>void
}

function Navbar(props:IProps){
    return <div>
        navbar-{props.title}
        <button onClick={()=>{
            props.callback();
        }}>Click</button>
    </div>
}

function Sidebar(){
    return <div>
Sidebar
    </div>
}
