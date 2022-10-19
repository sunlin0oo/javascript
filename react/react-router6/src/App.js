import './App.css';
// import { BrowserRouter } from 'react-router-dom'; 存在问题:会向后端请求路由，如果没有对应路由会返回404 
import { HashRouter, Route, Routes } from 'react-router-dom'
import MRouter from './router';
import Tabbar from './components/Tabbar';
function App() {
  return (
    <HashRouter>
      <MRouter></MRouter>
      <Tabbar></Tabbar>
    </HashRouter>
  );
}

export default App;
