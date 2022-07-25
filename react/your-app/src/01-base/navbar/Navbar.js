import React, { Component } from 'react'
//验证是否是想要的类型方法==>属性验证的方法
import kerwinPropTypes from 'prop-types'
export default class Navbar extends Component {
    state = {
        // 只能内部自己使用，外面无法改变
    }

    static prototypes = { 
      title:kerwinPropTypes.string,//验证是否是String
      leftshow:kerwinPropTypes.bool//验证是否是Bool
    } 
    // 默认属性，如果没有设置的话则会默认这个
    static  defaultProps = {
      leftshow:true
    }

    a = 100;//对象属性

    // 属性是父组件传来的==>this.props得到
  render() {
    // 解构==>传来的是字符串
    let {title,leftshow} = this.props;
    console.log(this.props);
    // 如何接受属性的时候做验证
    return (
      <div>
        {/* {leftshow?<button>返回</button>:''}
        Navbar - {title};
        {leftshow?<button>home</button>:''} */}
        {/* &&  true的话找后面，|| 前面有找前面，前面没有找后面 */}
        {leftshow && <button>返回</button>}
        Navbar - {title};
        {leftshow && <button>home</button>}
      </div>
    )
  }
}
// 默认值方法
// Navbar.defaultProps = {
//   leftshow:true
// }

// // 类属性==>性验证的方法
// Navbar.prototypes = { 
//   title:kerwinPropTypes.string,//验证是否是String
//   leftshow:kerwinPropTypes.bool//验证是否是Bool
// }

class Test{
  a = 1 //对象属性
  static a =1 //类属性
}

var obj = new Test();
console.log(Test.a,obj.a);