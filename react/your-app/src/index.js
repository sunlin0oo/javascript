import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// 必须要首字母大写
// import App from"./01-base/01-class"
// 将div插入到id===root的节点中==>JSX
import App from './02-advance/27-swiper-组件'
// react 17
// ReactDOM.render(<div>11111111111</div>,document.getElementById("root"));
//react 18
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App></App>);
