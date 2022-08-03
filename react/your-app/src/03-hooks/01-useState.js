import React ,{useState} from 'react'

export default function App() {
  const [name,setName] = useState('kerwin');
  const [age,setAge] = useState(100);
//   const obj = useState('kerwin');
//   console.log(obj)//索引0是状态值，1是改变状态值的唯一方法
  return (
    <div>
        <button onClick={()=>{
            setName("xiaoming");
            setAge(18)
        }}>{name}-{age}</button>
    </div>
  )
}
