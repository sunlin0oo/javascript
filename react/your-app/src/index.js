import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// 必须要首字母大写
// import App from"./01-base/01-class"
// 将div插入到id===root的节点中==>JSX
// import App from"./01-base/02-function"
// import App from "./01-base/03-组件嵌套"
// import App from "./01-base/04-组件样式"
// import App from "./01-base/05-事件绑定1"
// import App from "./01-base/06-事件绑定2"
// import App from "./01-base/07-ref"
// import App from "./01-base/08-Status"
// import App from "./01-base/09-循环渲染"
// import App from "./01-base/10-todolist"
// import App from "./01-base/12-sell"
// import App from "./01-base/13-setState同步or异步"
import App from "./01-base/14-betterscroll"
// react 17
// ReactDOM.render(<div>11111111111</div>,document.getElementById("root"));
//react 18
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App></App>);
