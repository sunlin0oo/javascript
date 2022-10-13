import React, { Component } from 'react'
import { connect } from 'dva'
/** 异步逻辑
 * 1.index.js中导出app.model(require('./models/maizuo').default);
 * 2.与/models/maizuo写好副作用函数==>于reducer中进行新老状态的修改
 * 3.通过connect包装组件，将低阶组件包装成高阶组件，进行属性的调用
 */
class Cinema extends Component {
  componentDidMount(){
    if(this.props.list.length === 0){
      // 如果一开始为空，则去请求数据
      // dispatch
      this.props.dispatch({
        type:'maizuo/getCinemaList'
      })
    }else{
      console.log('缓存',this,this.props.list)
    }
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.props.list.map(item=><li key={item.cinemaId}>{item.name}</li>)
          }
        </ul>
      </div>
    )
  }
}
// const mapStateToProps = (state)=>{
//   return{
//     list:state.maizuo.list
//   }
// }
// 因为只有一个输出省略return的写法==>错误==>第一个大括号是函数体大括号
// const mapStateToProps = (state)=>{
//   list:state.maizuo.list
// }

// 需要添加小括号表示整体
const mapStateToProps = (state)=>({
  list:state.maizuo.list
})
// connect 可以连接到models 获取对应数据对象
export default connect(mapStateToProps)(Cinema)
