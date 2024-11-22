
// import './App.css';
import { useEffect } from 'react';
import TicTacToe from './XOProject/xo';
// import XO from './XOProject/xo';

const tele=window.Telegram.WebApp;

function App() {
  useEffect(()=>{
    tele.ready();
  })
  tele.MainButton="Play"
  return (
    <div className="App">
      <TicTacToe/>
    </div>
  );
}

export default App;
