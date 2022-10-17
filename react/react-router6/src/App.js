import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import MRouter from './router';
function App() {
  return (
    <HashRouter>
      <MRouter></MRouter>
    </HashRouter>
  );
}

export default App;
