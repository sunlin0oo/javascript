import React, { Component } from 'react'
import{fromJS} from 'immutable'
export default class App extends Component {
    state = {
        info:fromJS({
            name:"kerwin",
            location:({
                province:"辽宁",
                city:"大连"
            }),
            favor:(["读书","看报","写代码"])
        })
    }

    componentDidMount(){
        console.log(this.state.info);
    }
  render() {
    return (
      <div>
        <h1>个人信息修改</h1>
        {/* 老状态可用的状况下去进行新状态的修改 */}
        <button onClick={()=>{
            this.setState({
                info:this.state.info.set(['name'],'xiaoming')
                // 先获取到loction Map结构，再进行修改
                // SetIn渗透到loction-city级别
                .setIn(['location','city'],'沈阳')
            })
        }}>修改</button>
        <br/>
        <div>
            {this.state.info.get('name')};
            {
                this.state.info.get('location').get('province')
            };
            -
            {
                this.state.info.get('location').get('city')
            };
            {
                this.state.info.get('favor').map((item,index)=>
                    (<li key={item}>{item}
                    <button onClick={()=>{
                        console.log(index);
                        this.setState({
                            // 设置新状态
                            // info:this.state.info.set('favor',
                            // // 获取到老状态
                            // this.state.info.get('favor')
                            // .splice(index,1))
                            // 修改
                            // info:this.state.info.setIn(['favor',index],'11111')
                            // 删除：updateIn更新favor字段，返回list结构
                            info:this.state.info.updateIn(['favor'],(list)=>(list.splice(index,1)))
                        })
                    }}>del</button></li>)
                )
            }
        </div>
        
      </div>
    )
  }
}
