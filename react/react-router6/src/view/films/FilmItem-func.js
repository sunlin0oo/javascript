import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function FilmItem(props) {
    // useNavigate 钩子可以在任何的路由包裹的组件内部进行使用，这样就可以不使用withRouter去包裹filmItem 再去获得history等属性
    const navigate = useNavigate();
    const handleChangePage = (id) => {
      // 跳转页面
  
      // navigate// query(URLSearch) 传参/detail?id=1000==>会自动添加路由不需要动态路由
      // navigate(`/detail?id=${id}`)
  
      // 路由传参 /detail/1000
      navigate(`/detail/${id}`)
    }
  return (
    <div>
        <li onClick={()=>handleChangePage(props.filmId)}>{props.name}</li>
    </div>
  )
}
