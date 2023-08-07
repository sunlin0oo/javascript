import React,{useEffect, useState} from 'react'
import axios from 'axios'
// useEffect 在每次屏幕更新渲染之后执行代码
// export default function App() {
//     const [list,setList] = useState([]);
//     // 每次执行setList都会执行函数App，故会无限循环
//     // axios.get('/test.json').then(res=>{
//     //     console.log(res.data)
//     //     setList(res.data.data.films)
//     // })
/**
 * 尽量不要使用useEffect请求数据等操作，使用useRef ==> https://tanstack.com/query/v4
 *                                    使用useSRW ==> https://swr.vercel.app/zh-CN
 */ 
//     useEffect(()=>{
//         axios.get('/test.json').then(res=>{
//                 console.log(res.data)
//                 setList(res.data.data.films)
//             })
//     },[])//传空数组，只会执行一次
//     //USEffect支持写多个数据
//     useEffect(()=>{
//       //AXIOS
//     })
//   return (
//     <div>
//         {
//             list.map((item)=><li key={item.filmId}>{item.name}</li>)
//         }
//     </div>
//   )
// }

function createConnection() {
  // 真实的实现会将其连接到服务器，此处代码只是示例
  return {
    connect() {
      console.log('✅ 连接中……');
    },
    disconnect() {
      console.log('❌ 连接断开。');
    }
  };
}

export default function App() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    /**
     * cleanup清理函数
     * 若存在两次渲染，执行第二次渲染的 Effect 之前，，它需要清理最近渲染的 Effect(第一次渲染的清理函数)
     * 故需要执行完清理函数后，去执行第二次渲染
     *  */ 
    return () => connection.disconnect();
  }, []);
  return <h1>欢迎来到聊天室！</h1>;
}

