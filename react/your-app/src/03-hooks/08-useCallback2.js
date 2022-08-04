import React,{useCallback, useMemo, useState} from 'react'

export default function App() {
    // 记忆函数，在进行与自己无关的操作及状态时，使用的是之前的缓存
    const [text,setText] = useState("");
    const [list,setList] = useState([1,2,3,4,5])
    const handlerChange =useCallback(
        (evt)=>{
        setText(evt.target.value);
    },[]) 

    const handlerClick = useCallback((evt)=>{
        // console.log(text);
        // list.push(text);//千万不要改变原状态，一定要深复制
        setList([...list,text]);
        // 清空
        setText("");
    },[text,list]) 

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
