import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useHistory } from 'umi'
export default function Login(props: any) {
    const history = useHistory()
    // const username: MutableRefObject<any> = React.useRef(null);
    // const password: MutableRefObject<any> = React.useRef(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // mock操作:::
    // GET获取值
    useEffect(() => {
        fetch('/users').then(res => res.json()).then(res => {
            console.log('res', res)
        })
    }, [])
    return (
        <div>
            <h1>Login</h1>
            <h3>账户</h3>
            {/* <input type='text' ref={username}></input> */}
            <input type='text' onChange={(evt) => {
                setUsername(evt.target.value)
            }}></input>
            <h3>密码</h3>
            {/* <input type='password' ref={password}></input> */}
            <input type='password' onChange={(evt) => {
                setPassword(evt.target.value)
            }}></input>
            <button onClick={() => {
                // const name = username.current.value;
                // localStorage.setItem('token', username.current.value);
                fetch("/users/login", {
                    method: "POST",
                    headers: {
                        // 传入内容的格式==>发送给后端的格式
                        "Content-Type": "application/json"
                    },
                    // 传递内容
                    body: JSON.stringify({
                        username,
                        password
                    })
                    /**Javascript fetch函数异步地从指定的url中提取资源。同时fetch返回Promise。
                     *  Promise可以帮助执行异步部分，并在资源以获取的资源作为参数加载后运行传入then（res => res.json()）的函数。
                     * 如果获取的资源是JSON格式，则可以使用json()进行解析==>.json()将仅以json内容的Promise返回body==>res.json()的作用的是把请求的返回值的转化成json的格式
                     * 如果不进行json()解析，则获取返回一个对象(Response)包含类似的报头的各种信息，HTTP状态等等 */
                }).then(res => res.json()).then(res => {
                    console.log(res);
                    if (res.ok) {
                        localStorage.setItem('token', 'sunlin');
                        // props.history.push('/center');
                        history.push('/center');
                    } else {
                        alert('输入账户密码错误')
                    }
                })
            }}>登录</button>
        </div>
    )
}