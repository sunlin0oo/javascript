import React, { useCallback, useMemo, useState } from 'react'
// todolist==>useCallback改版
export default function App() {
    // 记忆函数，在进行与自己无关的操作及状态时，使用的是之前的缓存
    const [name, setName] = useState('sunlin')
    const [text, setText] = useState("");
    const [list, setList] = useState([1, 2, 3, 4, 5])
    // 绑定改变(输入框)函数
    // const handlerChange = (evt)=>{
    //     setText(evt.target.value);
    // }
    /**单纯使用useCallback==>上面的写法效率会高于下面的写法
     * 真正有助于性能改善的，有 2 种场景：
     * 函数定义时需要进行大量运算， 这种场景极少
     * 需要比较引用的场景，如上文提到的useEffect，又或者是配合React.Memo使用： 就像本例中的如果不适用usecallback当输入框重新set 
     * handlerChange handlerClick handlerdel都会被重新定义
    */
    // 一旦setText发生改变，组件重新渲染，方法重新创建，使用usecallback(需要主动调用)组件重新渲染(固定住)，防止方法重新创建==>起到缓存作用==>一直使用之前所缓存的函数
    // 如果你想要记住的函数是一个事件处理器并且在渲染期间没有被用到
    const handlerChange = useCallback(
        (evt) => {
            console.log('evt', evt);
            setText(evt.target.value);
        }, [])

    // 绑定点击Add函数
    // const handlerClick = (evt)=>{
    //     // console.log(text);
    //     // list.push(text);//！！千万不要改变原状态，一定要深复制！！
    //     setList([...list,text]);
    //     // 清空
    //     setText("");
    // }
    const handlerClick = useCallback((evt) => {
        // console.log(text);
        // list.push(text);//千万不要改变原状态，一定要深复制
        setList([...list, text]);
        // 清空
        setText("");
    }, [text, list])

    // 绑定删除函数
    // const handlerdel = (index)=>{
    //     console.log(index);
    //     let newList = [...list];
    //     newList.splice(index,1)
    //     console.log(newList)
    //     setList(newList);
    // }

    // 第二个参数如果是空数组 [] ===>缓存的是之前的函数，里面的参数也是之前所缓存的值;所以要根据依赖进行实时更新创建函数
    // const handlerdel = useCallback(
    //     (index)=>{
    //     console.log(index);
    //     let newList = [...list];
    //     newList.splice(index,1)
    //     console.log(newList)
    //     setList(newList);
    // },[list])
    //useMemo会执行第一个函数并将执行结果返回 
    const handlerdel = useMemo(
        () => (index) => {
            console.log(index);
            let newList = [...list];
            newList.splice(index, 1)
            console.log(newList)
            setList(newList);
        }, [list])

    return (
        <div>
            {/* 虽然setName会导致App组件重新渲染，但是只有涉及到它的依赖才会导致函数重新创建，否则函数则会一直延用之前的缓存函数 */}
            {name}-<button onClick={()=>{setName('sunzifeng')}}>ChangeName</button>
            <input onChange={handlerChange} value={text} />
            <button onClick={handlerClick}>add</button>
            <ul>
                {
                    list.map((item, index) => <li key={index}>{item}
                        {/* 方便进行传参 */}
                        <button onClick={(index) => {
                            handlerdel(index)
                        }}>del</button></li>)
                }
            </ul>
            {/* {list.length === 0?"暂无待办事项":""} */}
            {!list.length && <div>暂无待办事项</div>}
        </div>
    )
}
