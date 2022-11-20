import React from 'react';
// import 'antd/dist/antd.css' // antd-mobile--PC版本CSS
// import ReactDOM from 'react-dom';
import App from './15-graphql/App'
// import App from './05-redux/App'

//react 18
import { createRoot } from 'react-dom/client';
// 必须要首字母大写
// 将div插入到id===root的节点中==>JSX

const container = document.getElementById('root');// DOM根节点=>React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// <App /> 是一段jsx
root.render(
  // redux持久化
    <App/>
  );

//react 17
// ReactDOM.render(<App />,document.getElementById("root"));
