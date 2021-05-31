function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  lines.forEach((element) => {
    let squaresTest;
    const [a, b, c] = element;
    // eslint-disable-next-line no-console

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      squaresTest = squares[a];
    }

    return squaresTest;
  });

  return null;
}

export default calculateWinner;
