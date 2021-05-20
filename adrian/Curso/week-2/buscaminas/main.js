let cellList = [];
let shuffleArr = [];
let mines = parseInt(prompt("¿Con cuántas minas quieres jugar?"));
let empty = 100 - mines;
let board = document.querySelector(".main__section--board");


function shuffleTheArray() {
  for (let i = 0; i < 100; i++) {
    if (i < mines) {
      shuffleArr.push("board__cell--mine");
    } else {
      shuffleArr.push("board__cell--empty");
    }
  }
  shuffleArr = shuffleArr.sort(() => Math.random() - 0.5);
}

function create() {
  shuffleTheArray();
  let index = 0;
  for (let r = 0; r < 10; r++) {
    cellList[r] = [];
    for (let c = 0; c < 10; c++) {
      let cell = document.createElement("div");
      cell.id = index;
      cell.className = shuffleArr[index];
      board.appendChild(cell);
      cellList[r].push(cell);
      index++;

      cell.addEventListener('click', function(e){
        click(cell)
      })
    }
  }
  giveNumbers();
  
}

function giveNumbers() {
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      let total = 0;
      let isMine = false;

      if (cellList[r][c].classList.contains("board__cells--mine")) {
        isMine = true;
      }

      if (isMine === false) {
        total = calculateNumber(r, c);
      }

      if (isMine === false && total === 0) {
        cellList[r][c].innerText = "";
      } else if (isMine) {
        cellList[r][c].innerText = "M";
      } else {
        cellList[r][c].innerText = total;
      }
    }
  }
}

function click(cell) {
  if (cell.classList.contains("board__cell--mine")) {
    alert("game over");
  } else {
    let total = cell.getAttribute('data');
    if (total != 0) {
      cell.classList.add("board__cell--cheked");
      cell.innerHTML = total;
      return;
    }
  }
}

function calculateNumber(r, c) {
  let total = 0;
  let currentId = cellList[r][c].id;
  let isLeft = currentId % 10 === 0;
  let isRigth = currentId % 10 === 9;

  if (cellList[r][c].classList.contains("board__cell--empty")) {
    if (currentId >0 && !isLeft && cellList[r][c-1].classList.contains('board__cell--mine'))total++;
    if (currentId >9 && !isRigth && cellList[r-1][c+1].classList.contains('board__cell--mine'))total++;
    if(currentId>10 && cellList[r-1][c].classList.contains('board__cell--mine'))total++;
    if(currentId>11 && !isLeft && cellList[r-1][c-1].classList.contains('board__cell--main'))total++;
    if(currentId<98 && !isRigth && cellList[r][c+1].classList.contains('board__cell--main'))total++;
    if(currentId<90 && !isLeft && cellList[r+1][c-1].classList.contains('board__cell--mine'))total++;
    if(currentId<88 && !isRigth && cellList[r+1][c+1].classList.contains('board__cell--mine'))total++;
    if(currentId<89 && cellList[r+1][c].classList.contains('board__cell--mine'))total++;
    document.getElementById(currentId).setAttribute('data', total);
    console.log(cellList[r][c]);
  }
  return total;
}

create();

//giveNumbers()