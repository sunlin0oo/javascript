import './App.css';
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
