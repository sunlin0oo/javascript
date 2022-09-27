import React,{useRef, useState} from 'react'

export default function App() {
    const [text,setText] = useState("");
    const [list,setList] = useState([1,2,3,4,5])
    const mytext= useRef()//与ref近似

    // const handlerChange = (evt)=>{
    //     setText(evt.target.value);
    // }

    const handlerClick = (evt)=>{
        // console.log(text);
        console.log(mytext.current);
        // list.push(text);//千万不要改变原状态，一定要深复制
        // setList([...list,text]);
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
