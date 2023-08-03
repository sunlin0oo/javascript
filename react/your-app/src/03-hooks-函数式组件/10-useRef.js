import React,{useRef, useState} from 'react'

export default function App() {
    const [text,setText] = useState("");
    const [list,setList] = useState([1,2,3,4,5])
    //与 state 一样，React 会在每次重新渲染之间保留 ref。但是，设置 state 会重新渲染组件，更改 ref 不会！
    const mytext= useRef()//与ref近似=>返回一个可变的 ref 对象

    // const handlerChange = (evt)=>{
    //     setText(evt.target.value);
    // }

    const handlerClick = (evt)=>{
        // console.log(text);
        console.log(mytext.current);
        // list.push(text);//千万不要改变原状态，一定要深复制
        // setList([...list,text]);
        // ...list 深复制存储之前的数据
        setList([...list,mytext.current.value]);
        // // 清空
        // setText("");
        mytext.current.value= ""
        
    }

    const handlerdel = (index)=>{
        console.log(index);
        let newList = [...list];
        newList.splice(index,1)
        console.log(newList)
        setList(newList);
    }
  return (
    <div>
        {/* <input onChange={handlerChange} value = {text}/> */}
        {/* React 都会将 ref 对象的 .current 属性设置为相应的 DOM 节点。 */}
        <input ref={mytext}/>
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
