import React, { Component } from 'react'
import {RouteComponentProps } from 'react-router-dom'
import store from '../redux/store';
interface IParam {
    myid:string
}
export default class Detail extends Component<RouteComponentProps<IParam>> {
  // 这里是接收者，订阅者是App.tsx 用于控制是否显示标题栏
    componentDidMount(): void {
        console.log(this.props.match);
        console.log(this.props.match.params.myid);
        store.dispatch({
          type:'hide'
        })
    }

    componentWillUnmount(): void {
      store.dispatch({
        type:'show'
      })
    }
    
  render() {
    return (
      <div>Detail</div>
    )
  }
}
