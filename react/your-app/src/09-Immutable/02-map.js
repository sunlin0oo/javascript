import React, { Component } from 'react'
import{Map} from'immutable';
// 对象用map
let obj = {
    name:"sunlin",
    age:100,
}

let oldImmuObj = Map(obj);
let newImmuObj = oldImmuObj.set("name","sunzifeng");
// _root--entries--
console.log(oldImmuObj,newImmuObj);

// 获取到value的方法
// 1.get获取
console.log(oldImmuObj.get("name"),newImmuObj.get("name"));
// 2.immutable 转换成普通对象 再转换回immuObj
console.log(oldImmuObj.toJS(),newImmuObj.toJS());
// export default class App extends Component {
//     state = {
//         info:Map({
//             name:"sunlin",
//             age:100
//         })
//     }
//   render() {
//     return (
//       <div>
//         <button onClick={()=>{
//             // 法1
//             this.setState({
//                 info:this.state.info.set("name",'sunzifeng').set('age','18'),//可以链式操作
//             })
//         }}>Click</button>
//         {this.state.info.name}-{this.state.info.age}
//       </div>
//     )
//   }
// }

export default class App extends Component {
    state = {
        info:{
            name:"sunlin",
            age:100
        }
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            // 法1
            // this.setState({
            //     info:this.state.info.set("name",'sunzifeng').set('age','18'),//可以链式操作
            // })
            // 法2
            let old = Map(this.state.info);//先获取到map对象
            let newImmu = old.set("name",'sunzif').set('age',18);
            this.setState({
                info:newImmu.toJS()
            });
        }}>Click</button>
        {this.state.info.name}-{this.state.info.age}
      </div>
    )
  }
}
