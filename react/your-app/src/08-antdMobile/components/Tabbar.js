import React ,{Component}from 'react'
import { withRouter } from 'react-router-dom'
import style from'./Tabbar.module.css'
import { TabBar } from 'antd-mobile'
import {
    AppOutline,
    UnorderedListOutline,
    UserOutline,
  } from 'antd-mobile-icons'
//   类组件写法：
class Tabbar extends Component{
    tabs = [
        {
            key: '/films',
            title: '电影',
            icon: <AppOutline />,
        },
        {
            key: '/cinemas',
            title: '影院',
            icon: <UnorderedListOutline />,
        },
        {
            key: '/center',
            title: '我的',
            icon: <UserOutline />,
        },
    ]
    render(){
        return (
            <div className={style.tabbar}>  
                    <TabBar onChange={(value)=>{
                        console.log(value);// 传的是key
                        this.props.history.push(value);
                        // this.props.location.pathname拿到的是完整的路径 留一级路径放置于activeKey中
                    }} activeKey = {'/'+this.props.location.pathname.split('/')[1]}>
                        {this.tabs.map(item => (
                            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                        ))}
                    </TabBar>
            </div>
          )
    }
}
export default withRouter(Tabbar);

// 函数式组件写法（未完成）：
// export default function Tabbar(props) {
//     const tabs = [
//         {
//           key: '/films',
//           title: '电影',
//           icon: <AppOutline />,
//         },
//         {
//           key: '/cinemas',
//           title: '影院',
//           icon: <UnorderedListOutline />,
//         },
//         {
//           key: '/center',
//           title: '我的',
//           icon: <UserOutline />,
//         },]
//   return (
//     <div className={style.tabbar}>  
//             <TabBar onChange={(value)=>{
//                 // console.log(value);传的是key
//                 props.history.push(value);
//             }}>
//                 {tabs.map(item => (
//                     <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
//                 ))}
//             </TabBar>
//     </div>
//   )
// }
 