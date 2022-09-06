import React from 'react';
// import 'antd/dist/antd.css' // antd-mobile--PC版本CSS
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './10-mobx/04-router/App'
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
=======
// import { createRoot } from 'react-dom/client';
// 必须要首字母大写
// 将div插入到id===root的节点中==>JSX
import App from './10-mobx/04-router/App'
//react 18
// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//   // redux持久化
//     <App/>
//   );
ReactDOM.render(<App />,document.getElementById("root"));
>>>>>>> 953aa7bcb26ba011faf343f5b86976869c631d9c
