import React, { Component } from 'react'
import WithRouter from '../../components/WithRouter';
// 如果在组件中使用类组件，由于不支持钩子，则需要自己写一个withrouter高阶组件
class FilmIten_class extends Component {
  render() {
    console.log(this.props)
    return (
      <li onClick={()=>this.handleClick(this.props.filmId)}>{this.props.name}</li>
    )
  }

  handleClick(id){
    console.log(this.props) // 这里的history是由自定义的WithRouter组件的useNavigate传的
    this.props.history.push(`/detail/${id}`);
    /** 
     * this.props.history.push 跳转页面
     * this.props.history.match 获取参数
     * this.props.history.location 获取当前路由*/ 
  }
}
// 自创WithRouter组件
export default WithRouter(FilmIten_class)
