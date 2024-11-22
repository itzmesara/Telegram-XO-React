import React, { useState, useEffect } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState('X');
  const [isGameOver, setIsGameOver] = useState(false);
  const [result, setResult] = useState('');

  useEffect(() => {
    cheakWin();
    cheakDraw();
  }, [boxes]);

  const handleBoxClick = (index) => {
    if (!isGameOver && boxes[index] === '') {
      const newBoxes = [...boxes];
      newBoxes[index] = turn;
      setBoxes(newBoxes);
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  const cheakWin = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winConditions.forEach((condition) => {
      const [a, b, c] = condition;
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        setIsGameOver(true);
        setResult(`${turn === 'X' ? 'O':'X'} Wins`);
      }
    });
  };

  const cheakDraw = () => {
    if (!isGameOver && boxes.every((box) => box !== '')) {
      setIsGameOver(true);
      setResult('Draw');
    }
  };

  const handlePlayAgain = () => {
    setBoxes(Array(9).fill(''));
    setTurn('X');
    setIsGameOver(false);
    setResult('');
  };

  return (
    <div>
      <div className="turn-container">
        <h3>Turn For</h3>
        <div className={`turn-box aling ${turn === 'X' ? 'active' : ''}`}>X</div>
        <div className={`turn-box aling ${turn === 'O' ? 'active' : ''}`}>O</div>
      </div>
      <div className="main-grid">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="box aling"
            onClick={() => handleBoxClick(index)}
          >
            {box}
          </div>
        ))}
      </div>
      <h2 id="results">{result}</h2>
      {isGameOver && (
        <button id="play-again" onClick={handlePlayAgain}>
          Play again
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
