import React from 'react';
// import 'antd/dist/antd.css' // antd-mobile--PC版本CSS
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// 必须要首字母大写
// 将div插入到id===root的节点中==>JSX
import {store,persistor} from './08-antdMobile/redux/store'
import App from './08-antdMobile/App'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
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
  // redux持久化
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App/>
    </PersistGate>
  </Provider>
  );
