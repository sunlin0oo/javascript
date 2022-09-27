import React, { useRef, useState } from 'react'

export default function App() {
    const [count,setcount] = useState(0)
    // useState 记忆函数，可以记住变量
    // 临时变量和函数会被重新赋值
    // useRef保存临时变量，另一个就是用在组件或标签(DOM上)
    // var mycount = 0
    var mycount = useRef(0);
  return (
    <div>
        <button onClick={()=>{
            setcount(count+1);
            // mycount++;
            mycount.current++
        }}>Click</button>
        {/* {count} - {mycount} */}
        {count} - {mycount.current}
    </div>
  )
}
