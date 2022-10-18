import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
    // 获取到url的参数(上个页面传来的参数)==>Nowplaying中的导航必须是query(URLSearch) 传参/detail?id=1000 使用
    const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>Detail
        <button onClick={()=>{
            // 本页面跳转到其他页面(一定要是当前的路由中)
            setSearchParams({id:1000})
        }}>猜你喜欢</button>
    </div>
  )
}
