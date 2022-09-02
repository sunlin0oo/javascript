import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { List, Image, InfiniteScroll } from 'antd-mobile';
import { NavLink,useHistory, withRouter } from 'react-router-dom';
export default function Nowplaying(props) {
  const [list,setlist] = useState([]);
  const [hasMore,setHasMore] = useState(true);
  // 作为值进行存储
  const count = useRef(0);
//   useEffect(() => {
//     axios({
//         url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",
//         headers:{
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
//             'X-Host': 'mall.film-ticket.film.list'
//         }
//     }).then(res=>{
//         console.log(res.data.data.films)
//         setlist(res.data.data.films)
//     })
// }, [])
const loadMore = ()=>{
  console.log('到底了')
  count.current++;
  // 解决频繁触发到底bug
  setHasMore(false)
  axios({
    url:`https://m.maizuo.com/gateway?cityId=110100&pageNum=${count.current}&pageSize=10&type=1&k=1886067`,
    headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
  }).then(res=>{
      console.log(res.data.data.films);
      // 数据的叠加
      setlist([...list, ...res.data.data.films]);
      // res.data.data.films>0控制最后的数据
      setHasMore(res.data.data.films.length>0);
  })
  
  }
  const history = useHistory();

  const handleChangePage=(id)=>{
    // 法一：
    // window.location.href = '#/detail/'+id

    // 法二：
    // console.log(props);
    // props.history.push(`/detail/${id}`)

    // 法三：动态路由传参==>为主
    history.push(`/detail/${id}`);

    //路由传参==>query传参
    // history.push({pathname:'/detail' ,query : {id: id}
    // });

    // state传参
    // history.push({pathname:"/detail",state:{myid:id}})

  }

  return (
    <div>
      {console.log(list)}
      <List>
        {list.map(item => (
          <List.Item onClick={()=>handleChangePage(item.filmId)}
            key={item.filmId}
            prefix={
              <Image
                src={item.poster}
                // style={{ borderRadius: 20 }}
                // fit='cover'
                width={40}
                height={40}
              />
            }
            description={
              <>{
                item.grade?<div>观众评分:{item.grade}</div>:
                <div style={{visibility:"hidden"}}>观众评分:{item.grade}</div>
              }
              <div>导演:{item.director}</div>
              <div>{item.nation}|{item.runtime}分钟</div>
              </>
            }
          >
            {item.name}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}
