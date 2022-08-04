import React,{useEffect, useState} from 'react'
import axios from 'axios'
export default function App() {
    const [list,setList] = useState([]);
    // 每次执行setList都会执行函数App，故会无限循环
    // axios.get('/test.json').then(res=>{
    //     console.log(res.data)
    //     setList(res.data.data.films)
    // })

    useEffect(()=>{
        axios.get('/test.json').then(res=>{
                console.log(res.data)
                setList(res.data.data.films)
            })
    },[])//传空数组，只会执行一次
    //USEffect支持写多个数据
    useEffect(()=>{
      //AXIOS
    })
  return (
    <div>
        {
            list.map((item)=><li key={item.filmId}>{item.name}</li>)
        }
    </div>
  )
}
