import React from 'react'

export default function App() {
  return (
    <div>
        App
        <Child name='aaaa'></Child>
    </div>
  )
}
// 接口约束
interface IProps{
    name:String
}
// 写法1：
// function Child(props:IProps){
//     return <div>Child-{props.name}</div>
// }
// 写法2：
const Child:React.FC<IProps> = (props)=>{
    return <div>Child-{props.name}</div>
}