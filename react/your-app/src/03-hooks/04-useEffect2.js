import React, { useEffect, useState } from 'react'

export default function App() {
    const [name,setname] = useState("Kerwin");
    useEffect(()=>{
        setname(name.substring(0,1).toUpperCase()+name.substring(1))
    },[name])//这个括号是用来定依赖的
    // 第一次执行一次，之后name(依赖)更新也会执行
  return (
    <div>
        {name}
        <button onClick={()=>{
            setname("sunlin")
        }}>
            Click
        </button>
    </div>
  )
}
