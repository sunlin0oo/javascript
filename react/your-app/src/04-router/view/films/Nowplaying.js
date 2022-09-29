import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink,useHistory, withRouter } from 'react-router-dom';
export default function Nowplaying(props) {
  const [list,setlist] = useState([]);
  useEffect(() => {
    axios({
        url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    }).then(res=>{
        console.log(res.data.data.films)
        setlist(res.data.data.films)
    })
}, [])
  const history = useHistory();// 等价于props.history
  // 给每一个list绑定点击事件==>点击对应的<li>进行页面的跳转
  const handleChangePage=(id)=>{
    // 法一：
    // window.location.href = '#/detail/'+id

    // 法二：
    // console.log(props);
    // props.history.push(`/detail/${id}`)

    // 法三：动态路由传参==>为主==>要与indexRouer中进行匹配
    history.push(`/detail/${id}`);

    //路由传参==>query传参
    // history.push({pathname:'/detail' ,query : {id: id}
    // });

    // state传参
    // history.push({pathname:"/detail",state:{myid:id}})

  }

  return (
    <div>
      <ul>
        {
          // 渲染一个个组件
          list.map(item=>
            // {...item}作为属性传到FilmItem中,{...props}通过父组件给子组件拿到props.history
            // <FilmItem key={item.filmId} {...item} {...props}></FilmItem>
            <WithFilmItem key={item.filmId} {...item}></WithFilmItem>
          )
        }
      </ul>
      
    </div>
  )
}
// FilmItem是Nowplaying的亲儿子
function FilmItem(props){
  console.log(props);
  // <li key={item.filmId}>{item.name}</li>

  // NavLink进行拼接==>声明式导航
  // <li key={item.filmId}><NavLink to={'/detail/'+item.filmId}>{item.name}</NavLink></li>

  // 编程式导航
  // return <li key={item.filmId} onClick={()=>{
  //   handleChangePage(item.filmId)
  // }}>{item.name}</li>

  let {name,filmId} = props;//解构
  return <li onClick={()=>{
    props.history.push(`/detail/${filmId}`);
  }}>{name}</li>
}

// withRouter跨级传输
const WithFilmItem = withRouter(FilmItem)
