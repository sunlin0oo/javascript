import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Detail_dongtai() {
  // 获取到url的参数(上个页面传来的参数)==>Nowplaying中的导航必须是query(URLSearch) 传参/detail?id=1000 使用
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  return (
    <div>Detail
      <button onClick={() => {
        navigate('/detail/1000')
      }}>猜你喜欢</button>
    </div>
  )
}
