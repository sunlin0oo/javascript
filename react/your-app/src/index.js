import React from 'react';
// import 'antd/dist/antd.css' // antd-mobile--PC版本CSS
import ReactDOM from 'react-dom';
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