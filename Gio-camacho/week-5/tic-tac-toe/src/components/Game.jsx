import React, { useState } from 'react';
import Board from './Board';
import calculateWinner from './CalculateWinner';

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [history, setHistory] = useState([
    {
      square: Array(9).fill(null)
    }
  ]);

  const handleClick = (i) => {
    const newHistory = history.slice(0, setStepNumber + 1);
    // const current = newHistory[newHistory.length - 1];
    const current = newHistory.length - 1;
    const squares = current.square.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(newHistory.concat([{
      squares
    }]));

    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((move) => {
    const desc = moves ? `Go to move # ${move}` : 'Go to game start';

    return (
      // eslint-disable-next-line react/no-array-index-key
      <li key={move}>
        <button
          type="button"
          onClick={
          () => jumpTo(move)
          }
        >
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `winner: ${winner}`;
  } else {
    status = `next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          square={current.square}
          onClick={(i) => { handleClick(i); }}
        />
      </div>

      <div className="game-info">
        <div>
          {status}
        </div>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  );
}

export default Game;
