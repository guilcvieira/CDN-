// Instalar esses pacotes é opcional, mas é recomendado por conta do intelisense
// Use npm install @types/react-dom
import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
function Square({
  value,
  onSquareClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "square",
    onClick: onSquareClick
  }, value);
}
function Board({
  xIsNext,
  squares,
  onPlay,
  playerName
}) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner} 🎉` : `Next player: ${xIsNext ? playerName : "Opponent"}`;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "status"
  }, status), /*#__PURE__*/React.createElement("div", {
    className: "board-row"
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement(Square, {
    value: squares[i],
    onSquareClick: () => handleClick(i)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "board-row"
  }, [3, 4, 5].map(i => /*#__PURE__*/React.createElement(Square, {
    value: squares[i],
    onSquareClick: () => handleClick(i)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "board-row"
  }, [6, 7, 8].map(i => /*#__PURE__*/React.createElement(Square, {
    value: squares[i],
    onSquareClick: () => handleClick(i)
  }))));
}
function App({
  playerName
}) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => /*#__PURE__*/React.createElement("li", {
    key: move
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => jumpTo(move)
  }, move ? `Go to move #${move}` : "Go to game start")));
  return /*#__PURE__*/React.createElement("div", {
    className: "game"
  }, /*#__PURE__*/React.createElement("div", {
    className: "game-board"
  }, /*#__PURE__*/React.createElement(Board, {
    xIsNext: xIsNext,
    squares: currentSquares,
    onPlay: handlePlay,
    playerName: playerName
  })), /*#__PURE__*/React.createElement("div", {
    className: "game-info"
  }, /*#__PURE__*/React.createElement("ol", null, moves)));
}
function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
window["startTicTacToe"] = ({
  container,
  playerName
}) => {
  const elem = document.getElementById(container);
  if (!elem) {
    console.error(`Container with id ${container} not found.`);
    return;
  }
  const root = createRoot(elem);
  root.render(/*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(App, {
    playerName: playerName
  })));
};