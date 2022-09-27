import React,{useState} from 'react'

export default function App() {
    // 定义两个状态text,list
    const [text,setText] = useState("");
    const [list,setList] = useState([1,2,3,4,5])
    // 绑定改变函数
    const handlerChange = (evt)=>{
        setText(evt.target.value);
    }
    //绑定点击函数
    const handlerClick = (evt)=>{
        // console.log(text);
        // list.push(text);//！！千万不要改变原状态，一定要深复制！！
        setList([...list,text]);
        // 清空
        setText("");
    }
    //绑定删除函数
    const handlerdel = (index)=>{
        console.log(index);
        let newList = [...list];
        newList.splice(index,1)
        console.log(newList)
        setList(newList);
    }
  return (
    <div>
        <input onChange={handlerChange} value = {text}/>
        <button onClick={handlerClick}>add</button>
        <ul>
            {
                list.map((item,index)=>
                <li key={index}>
                    {item}
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
