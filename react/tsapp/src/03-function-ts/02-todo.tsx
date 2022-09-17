import React, { useRef, useState } from 'react'

export default function App() {
    // 字符串数组
    const [list,setList] = useState<string[]>([]);
    // 需要给ref初始值添加null则可以去掉错误
    const mytext = useRef<HTMLInputElement>(null);
  return (
    <div>
        <input ref = {mytext}></input>

        <button onClick={()=>{
            console.log((mytext.current as HTMLInputElement).value);
            setList([...list,(mytext.current as HTMLInputElement).value])
        }}></button>

        {
            list.map((item,index)=>
                <li key={index}>{item}</li>
            )
        }
    </div>
  )
}
