import { connect } from 'dva'
import React, { Component } from 'react'

class Detail extends Component {
  componentDidMount(){
    console.log('接收上一个页面传来的id，利用此id取数据',this.props.match.params.myid);
    this.props.dispatch({
      type:'maizuo/hide'
    })
  }

  componentWillUnmount(){
    this.props.dispatch({
      type:'maizuo/show'
    })
  }
  render() {
    return (
      <div>Detail</div>
    )
  }
}
// 什么参数都不传可以获取到dispatch 等价于 redux中store.dispatch
export default connect()(Detail)
