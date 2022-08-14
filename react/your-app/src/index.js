import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// 必须要首字母大写
// import App from"./01-base/01-class"
// 将div插入到id===root的节点中==>JSX
import store from './06-react-redux/redux/store'
import App from './06-react-redux/App.js'
// import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// Provider的任务就是把store传入其中
// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>
// )
// react 17
// ReactDOM.render(<div>11111111111</div>,document.getElementById("root"));
//react 18
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( 
  <Provider store={store}>
    <App/>
  </Provider>);
