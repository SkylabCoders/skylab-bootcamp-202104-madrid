const cellList = [[{ open: undefined, mine: undefined }]];
let cell;


//crea el tablero
function printBoard(rows, columns) {
  let board = document.querySelector(".main__section--board");
  let id = 1;

  for (let r = 0; r < rows; r++) {
    cellList[r] = [];
    for (let c = 0; c < columns; c++) {
      cellList[r][c] = {
        id: id,
        open: false,
        mine: false,
        row: r + 1,
        column: c + 1,
      };
      cellList[r][c].id = id;

      cell = document.createElement("button");
      cell.setAttribute('id', r + c)
      board.appendChild(cell);
      cell.classList.add("board__button--closed");
      cell.id = id;
      id++;
    }
  }
}

printBoard(10, 10);

//distribuye las minas aleatoriamente
/*function pushMine(numMines) {
  for (let i = 0; i < numMines; i++) {
    r = Math.floor(Math.random() * 10);
    c = Math.floor(Math.random() * 10);
    while (cellList[r][c].mine !== true) {
      cellList[r][c].mine = true;
    }
  }
}*/
function pushMine() {
  for (let i = 0; i < 100; i++) {
    let mine = Math.floor(Math.random() * 100) + 1;
    
    if (cell.id === mine){
      //cell.classList.add("board__button--mine");
      cell.classList.toogle("board__button--mine");
    }
  }
}
pushMine();

//distribulle las minas de forma aleatoria por el tablero
function verifyButton() {
  for (let i = 0; i < 100; i++) {
    if (cell.id === i) {
      cell.id.classList.add("board__button--mine");
    }
  }
}

pushMine(10);
console.log(cellList);

//recorre los bototnes para que escuchen el eventoclick
function travelCells() {
  for (i = 0; i < 100; i++) {
    let thisButton = document.getElementById(i + 1);
    thisButton.addEventListener("click", () => {
      cell.open = true;
      alert("celda abierta");
    });
  }
}

//abre la celda
function openCell() {
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      cellList[r][c][id] = true;
      cellList[r][c].id = id;
    }
  }
}

travelCells();
