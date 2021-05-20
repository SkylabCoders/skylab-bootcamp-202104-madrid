//Variables
const container = document.getElementById("container");
const bodyElement = document.querySelector("body");
let row = 10;
let col = 10;
let amongOfMines = 11;
let mineField = new Array();
let opened = 0;

//Functions
function tileValue(row, col) {
  if (mineField[row] === undefined || mineField[row][col] === undefined) {
    return -1;
  } else {
    return mineField[row][col];
  }
}

function creatingArray(row, col, mineField) {
  for (let i = 0; i < row; i++) {
    mineField[i] = new Array();
    for (let j = 0; j < col; j++) {
      mineField[i][j] = 0;
    }
  }
}

function placingMines(mineField) {
  let mines = 0;
  let randomCol;
  let randomRow;
  while (mines < amongOfMines) {
    randomRow = Math.floor(Math.random() * col);
    randomCol = Math.floor(Math.random() * row);
    if (mineField[randomRow][randomCol] === 0) {
      mineField[randomRow][randomCol] = 9;
      mines++;
    }
  }
}

function placingDigits(row, col, mineField) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mineField[i][j] === 9) {
        for (let ii = -1; ii <= 1; ii++) {
          for (let jj = -1; jj <= 1; jj++) {
            if (ii !== 0 || jj !== 0) {
              if (
                tileValue(i + ii, j + jj) != 9 &&
                tileValue(i + ii, j + jj) != -1
              ) {
                mineField[i + ii][j + jj]++;
              }
            }
          }
        }
      }
    }
  }
}

function appendSquares(row, col, container) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let span = document.createElement("span");
      span.id = `${i}${j}`;
      span.classList.add("box", "first");
      span.dataset.row = i;
      span.dataset.col = j;

      container.appendChild(span);
    }
  }
}

function fill(row, col) {
  let tile = document.getElementById(`${row}${col}`);

  if (tile.classList.contains("first")) {
    tile.classList.remove("first");

    if (tile.classList.contains("checked")) {
      tile.classList.remove("checked");
    }

    if (mineField[row][col] > 0) {
      tile.innerHTML = mineField[row][col];
      opened++;
    } else {
      tile.classList.add("opened");
      opened++;
    }

    if (mineField[row][col] === 0) {
      for (let ii = -1; ii <= 1; ii++) {
        for (let jj = -1; jj <= 1; jj++) {
          if (ii !== 0 || jj !== 0) {
            if (tileValue(row + ii, col + jj) !== 9) {
              if (tileValue(row + ii, col + jj) !== -1) {
                fill(row + ii, col + jj);
              }
            }
          }
        }
      }
    }
  }
}

function runApp() {
  creatingArray(row, col, mineField);
  placingMines(mineField);
  placingDigits(row, col, mineField);
  appendSquares(row, col, container);
}

runApp();

function restart() {
  let playAgainButton = document.getElementById("again");

  playAgainButton.addEventListener("click", () => {
    // container.remove();
    // playAgainButton.remove();
    location.reload();
  });
}

//Events Listeners
let spanBox = document.querySelectorAll(".box");
spanBox.forEach((square) => {
  square.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    square.classList.toggle("checked");
  });
});

spanBox.forEach((square) => {
  square.addEventListener("click", () => {
    if (!square.classList.contains("checked")) {
      let clickedRow = square.dataset["row"];
      let clickedCol = square.dataset["col"];
      let clickedVal = mineField[clickedRow][clickedCol];

      if (clickedVal === 0) {
        fill(parseInt(clickedRow), parseInt(clickedCol));
      }

      if (clickedVal > 0 && clickedVal < 9) {
        square.classList.remove("first");
        square.innerHTML = clickedVal;
        opened++;
      }

      if (clickedVal === 9) {
        square.classList.remove("first");

        let innerSpan = document.createElement("span");
        innerSpan.classList.add("bomb");
        square.appendChild(innerSpan);

        let button = document.createElement("a");
        button.id = "again";
        button.href = "#";
        button.innerText = "Jugar de Nuevo?";

        bodyElement.append(button);
        restart();
      }
    }
  });
});
