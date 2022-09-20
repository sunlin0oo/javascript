import React, { Children, Component } from 'react'
class Child extends Component{
    render(){
        return <div>
            Child
            {/* 插槽 slot */}
            {this.props.children[0]}
            {this.props.children[2]}
            {this.props.children[1]}
        </div>
    }
}

class Swiper extends Component{
  render(){
    return <div>
      {/* 想要轮播什么内容，在这里留好插槽即可 */}
      {this.props.children}
    </div>
  }
}
// 父组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Swiper>
            <div>111111111</div>
            <div>222222222</div>
            <div>333333333</div>
        </Swiper>
        {/* 这里只会显示Child组件里面的东西，遇到组件时，会将此时替换成组件的内容 
        想把标签等其他内容放到Child里面，需要使用插槽,将其挂载到children属性上(固定 )*/}
        <Child>
          {/* children[0] */}
            <div>111111111</div>
          {/* children[1] */}
            <div>222222222</div>
          {/* children[2] */}
            <div>333333333</div>
            {
                // children
            }
        </Child>
      </div>
    )
  }
}
/**
 * 1.复用
 * 2.减少父子通信
 */