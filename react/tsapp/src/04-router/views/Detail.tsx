import React, { Component } from 'react'
import {RouteComponentProps } from 'react-router-dom'
interface IParam {
    myid:string
}
export default class Detail extends Component<RouteComponentProps<IParam>> {
    componentDidMount(): void {
        console.log(this.props.match);
        console.log(this.props.match.params.myid);

    }
  render() {
    return (
      <div>Detail</div>
    )
  }
}
