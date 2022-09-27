import React,{useCallback, useMemo, useState} from 'react'
// todolist==>useCallback改版
export default function App() {
    // 记忆函数，在进行与自己无关的操作及状态时，使用的是之前的缓存
    const [text,setText] = useState("");
    const [list,setList] = useState([1,2,3,4,5])
    // 绑定改变函数
    // const handlerChange = (evt)=>{
    //     setText(evt.target.value);
    // }
    // 一旦setText发生改变，组件重新渲染，方法重新创建，使用usecallback防止重复渲染==>起到缓存作用==>一直使用之前所缓存的函数
    const handlerChange =useCallback(
        (evt)=>{
        setText(evt.target.value);
    },[]) 

    // 绑定点击函数
    // const handlerClick = (evt)=>{
    //     // console.log(text);
    //     // list.push(text);//！！千万不要改变原状态，一定要深复制！！
    //     setList([...list,text]);
    //     // 清空
    //     setText("");
    // }
    const handlerClick = useCallback((evt)=>{
        // console.log(text);
        // list.push(text);//千万不要改变原状态，一定要深复制
        setList([...list,text]);
        // 清空
        setText("");
    },[text,list]) 
    // 绑定删除函数
    // const handlerdel = (index)=>{
    //     console.log(index);
    //     let newList = [...list];
    //     newList.splice(index,1)
    //     console.log(newList)
    //     setList(newList);
    // }

    // 缓存的是之前的函数，里面的参数也是之前所缓存的值
    // const handlerdel = useCallback(
    //     (index)=>{
    //     console.log(index);
    //     let newList = [...list];
    //     newList.splice(index,1)
    //     console.log(newList)
    //     setList(newList);
    // },[list])
    
    const handlerdel = useMemo(
        ()=>(index)=>{
        console.log(index);
        let newList = [...list];
        newList.splice(index,1)
        console.log(newList)
        setList(newList);
    },[list]) 

  return (
    <div>
        <input onChange={handlerChange} value = {text}/>
        <button onClick={handlerClick}>add</button>
        <ul>
            {
                list.map((item,index)=><li key={index}>{item}
                {/* 方便进行传参 */}
                <button onClick={(index)=>{
                    handlerdel(index)
                }}>del</button></li>)
            }
        </ul>
        {/* {list.length === 0?"暂无待办事项":""} */}
        {!list.length && <div>暂无待办事项</div>}
    </div>
  )
}
