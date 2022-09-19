import React from 'react';
// import 'antd/dist/antd.css' // antd-mobile--PC版本CSS
// import ReactDOM from 'react-dom';
// import App from './10-mobx/04-router/App'
import App from './02-advance/02-非受控卖座'
//react 18
import { createRoot } from 'react-dom/client';
// 必须要首字母大写
// 将div插入到id===root的节点中==>JSX

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  // redux持久化
    <App/>
  );

//react 17
// ReactDOM.render(<App />,document.getElementById("root"));
