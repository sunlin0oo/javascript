import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import FilmItem from './FilmItem-func';
import FilmItem from './FilmItem_class';
export default function Nowplaying() {
  const [list, setlist] = useState([]);
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      setlist(res.data.data.films)
    })
  }, [])
  // const navigate = useNavigate();
  // const handleChangePage = (id) => {
  //   // 跳转页面

  //   // navigate// query(URLSearch) 传参/detail?id=1000==>会自动添加路由不需要动态路由
  //   // navigate(`/detail?id=${id}`)

  //   // 路由传参 /detail/1000
  //   navigate(`/detail/${id}`)
  // }
  return (
    <div>
      <ul>
        {/* {
          list.map((item) => <li key={item.filmId} onClick={()=>{
            handleChangePage(item.filmId);
          }}>{item.name}</li>)
        } */}
        {/* 交给孩子组件进行处理 */}
        {list.map((item) => <FilmItem key={item.filmId} {...item}></FilmItem>)}
      </ul>
    </div>
  )
}
