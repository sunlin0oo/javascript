import React, { Component } from 'react'

export default class Detail extends Component {
  componentDidMount(){
    console.log('接收上一个页面传来的id，利用此id取数据',this.props.match.params.myid)
  }
  render() {
    return (
      <div>Detail</div>
    )
  }
}
