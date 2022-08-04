import React, { useState } from 'react'

export default function App() {
    const [count,setcount] = useState(0)
    // useState 记忆函数，可以记住变量
    // 临时变量和函数会被重新赋值
    var mycount = 0
  return (
    <div>
        <button onClick={()=>{
            setcount(count+1);
            mycount++;
        }}>Click</button>
        {count} - {mycount}
    </div>
  )
}
