//Global variables

// const { default: generateEmptyCoverage } = require("@jest/reporters/build/generateEmptyCoverage");

const grid = document.querySelector(".grid");
let arr = [];
let numIdCell = 0;
let numMines = 0;
let randomOrderedArr = [];

//FUNCTIONS

// Function to check neighborhood and open cells automatically .
function checkBorders(cell, i, x) {
  if (i === 0) {
    if (x === 0) {
      if (arr[i][x + 1].innerText !== "") {
        cell = arr[i][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i][x + 1];
        check(cell, i, x + 1);
      }
      if (arr[i + 1][x].innerText !== "") {
        cell = arr[i + 1][x];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x];
        check(cell, i + 1, x);
      }
      if (arr[i + 1][x + 1].innerText !== "") {
        cell = arr[i + 1][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x + 1];
        check(cell, i + 1, x + 1);
      }
    } else if (x === 9) {
      if (arr[i][x - 1].innerText !== "") {
        cell = arr[i][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i][x - 1];
        check(cell, i, x - 1);
      }
      if (arr[i + 1][x].innerText !== "") {
        cell = arr[i + 1][x];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x];
        check(cell, i + 1, x);
      }
      if (arr[i + 1][x - 1].innerText !== "") {
        cell = arr[i + 1][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x - 1];
        check(cell, i + 1, x - 1);
      }
    } else {
      if (arr[i][x - 1].innerText !== "") {
        cell = arr[i][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i][x - 1];
        check(cell, i, x - 1);
      }
      if (arr[i][x + 1].innerText !== "") {
        cell = arr[i][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i][x + 1];
        check(cell, i, x + 1);
      }
      if (arr[i + 1][x].innerText !== "") {
        cell = arr[i + 1][x];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x];
        check(cell, i + 1, x);
      }
      if (arr[i + 1][x - 1].innerText !== "") {
        cell = arr[i + 1][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x - 1];
        check(cell, i + 1, x - 1);
      }
      if (arr[i + 1][x + 1].innerText !== "") {
        cell = arr[i + 1][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x + 1];
        check(cell, i + 1, x + 1);
      }
    }
  } else if (i === 9) {
    if (x === 0) {
      if (arr[i - 1][x].innerText !== "") {
        cell = arr[i - 1][x];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x];
        check(cell, i - 1, x);
      }
      if (arr[i][x + 1].innerText !== "") {
        cell = arr[i][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i][x + 1];
        check(cell, i, x + 1);
      }
      if (arr[i - 1][x + 1].innerText !== "") {
        cell = arr[i - 1][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x + 1];
        check(cell, i - 1, x + 1);
      }
    } else if (x === 9) {
      if (arr[i - 1][x].innerText !== "") {
        cell = arr[i - 1][x];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x];
        check(cell, i - 1, x);
      }
      if (arr[i][x - 1].innerText !== "") {
        cell = arr[i][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i][x - 1];
        check(cell, i, x - 1);
      }
      if (arr[i - 1][x - 1].innerText !== "") {
        cell = arr[i - 1][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x - 1];
        check(cell, i - 1, x - 1);
      }
    } else {
      if (arr[i - 1][x].innerText !== "") {
        cell = arr[i - 1][x];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x];
        check(cell, i - 1, x);
      }
      if (arr[i][x + 1].innerText !== "") {
        cell = arr[i][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i][x + 1];
        check(cell, i, x + 1);
      }
      if (arr[i][x - 1].innerText !== "") {
        cell = arr[i][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i][x - 1];
        check(cell, i, x - 1);
      }
      if (arr[i - 1][x - 1].innerText !== "") {
        cell = arr[i - 1][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x - 1];
        check(cell, i - 1, x - 1);
      }
      if (arr[i - 1][x + 1].innerText !== "") {
        cell = arr[i - 1][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x + 1];
        check(cell, i - 1, x + 1);
      }
    }
  } else {
    if (x === 0) {
      if (arr[i - 1][x].innerText !== "") {
        cell = arr[i - 1][x];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x];
        check(cell, i - 1, x);
      }
      if (arr[i + 1][x].innerText !== "") {
        cell = arr[i + 1][x];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x];
        check(cell, i + 1, x);
      }
      if (arr[i][x + 1].innerText !== "") {
        cell = arr[i][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i][x + 1];
        check(cell, i, x + 1);
      }
      if (arr[i - 1][x + 1].innerText !== "") {
        cell = arr[i - 1][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x + 1];
        check(cell, i - 1, x + 1);
      }
      if (arr[i + 1][x + 1].innerText !== "") {
        cell = arr[i + 1][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x + 1];
        check(cell, i + 1, x + 1);
      }
    } else if (x === 9) {
      if (arr[i - 1][x].innerText !== "") {
        cell = arr[i - 1][x];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x];
        check(cell, i - 1, x);
      }
      if (arr[i + 1][x].innerText !== "") {
        cell = arr[i + 1][x];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x];
        check(cell, i + 1, x);
      }
      if (arr[i][x - 1].innerText !== "") {
        cell = arr[i][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i][x - 1];
        check(cell, i, x - 1);
      }
      if (arr[i - 1][x - 1].innerText !== "") {
        cell = arr[i - 1][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x - 1];
        check(cell, i - 1, x - 1);
      }
      if (arr[i + 1][x - 1].innerText !== "") {
        cell = arr[i + 1][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x - 1];
        check(cell, i + 1, x - 1);
      }
    } else {
      if (arr[i - 1][x].innerText !== "") {
        cell = arr[i - 1][x];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x];
        check(cell, i - 1, x);
      }
      if (arr[i + 1][x].innerText !== "") {
        cell = arr[i + 1][x];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x];
        check(cell, i + 1, x);
      }
      if (arr[i][x - 1].innerText !== "") {
        cell = arr[i][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i][x - 1];
        check(cell, i, x - 1);
      }
      if (arr[i][x + 1].innerText !== "") {
        cell = arr[i][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i][x + 1];
        check(cell, i, x + 1);
      }
      if (arr[i - 1][x - 1].innerText !== "") {
        cell = arr[i - 1][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x - 1];
        check(cell, i - 1, x - 1);
      }
      if (arr[i - 1][x + 1].innerText !== "") {
        cell = arr[i - 1][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i - 1][x + 1];
        check(cell, i - 1, x + 1);
      }
      if (arr[i + 1][x - 1].innerText !== "") {
        cell = arr[i + 1][x - 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x - 1];
        check(cell, i + 1, x - 1);
      }
      if (arr[i + 1][x + 1].innerText !== "") {
        cell = arr[i + 1][x + 1];
        cell.classList.remove("hidden");
      } else {
        cell.classList.remove("hidden");
        cell = arr[i + 1][x + 1];
        check(cell, i + 1, x + 1);
      }
    }
  }
}

// Function which reveals what kind of cell is: bomb, free cell with the amount of neighbors
function kindOfCell(cell, i, x) {
  if (cell.innerText !== "") {
    cell.classList.remove("hidden");
    return;
  } else {
    checkBorders(cell, i, x);
  }
}

//It is call from the main function through an event to establish when the game is over or keep going
function check(cell, i, x) {
  if (cell.classList.contains("bomb")) {
    cell.classList.remove("hidden");
    alert("game over");
    return;
  } else if (cell.classList.contains("checked")) {
    //do nothing
    return;
  } else {
    cell.classList.add("checked");
    cell.classList.remove("hidden");
    kindOfCell(cell, i, x);
  }
}

//This function returns a number value which we're gonna use for printing it on every cell.
function addNumbers(i, x) {
  let total = 0;

  if (i === 0) {
    if (x === 0) {
      if (arr[i][x + 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x + 1].classList.contains("bomb")) {
        total++;
      }
    } else if (x === 9) {
      if (arr[i][x - 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x - 1].classList.contains("bomb")) {
        total++;
      }
    } else {
      if (arr[i][x - 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i][x + 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x - 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x + 1].classList.contains("bomb")) {
        total++;
      }
    }
  } else if (i === 9) {
    if (x === 0) {
      if (arr[i - 1][x].classList.contains("bomb")) {
        total++;
      }
      if (arr[i][x + 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i - 1][x + 1].classList.contains("bomb")) {
        total++;
      }
    } else if (x === 9) {
      if (arr[i - 1][x].classList.contains("bomb")) {
        total++;
      }
      if (arr[i][x - 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i - 1][x - 1].classList.contains("bomb")) {
        total++;
      }
    } else {
      if (arr[i - 1][x].classList.contains("bomb")) {
        total++;
      }
      if (arr[i][x + 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i][x - 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i - 1][x - 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i - 1][x + 1].classList.contains("bomb")) {
        total++;
      }
    }
  } else {
    if (x === 0) {
      if (arr[i - 1][x].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x].classList.contains("bomb")) {
        total++;
      }
      if (arr[i][x + 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i - 1][x + 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x + 1].classList.contains("bomb")) {
        total++;
      }
    } else if (x === 9) {
      if (arr[i - 1][x].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x].classList.contains("bomb")) {
        total++;
      }
      if (arr[i][x - 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i - 1][x - 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x - 1].classList.contains("bomb")) {
        total++;
      }
    } else {
      if (arr[i - 1][x].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x].classList.contains("bomb")) {
        total++;
      }
      if (arr[i][x - 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i][x + 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i - 1][x - 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i - 1][x + 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x - 1].classList.contains("bomb")) {
        total++;
      }
      if (arr[i + 1][x + 1].classList.contains("bomb")) {
        total++;
      }
    }
  }
  return total;
}

//Function for painting numbers or bombs on our board
function paintBoard() {
  for (let i = 0; i < 10; i++) {
    for (let x = 0; x < 10; x++) {
      let neighborBombs = 0;
      let iAmAMine = false;
      if (arr[i][x].classList.contains("bomb")) {
        iAmAMine = true;
      }

      if (!iAmAMine) {
        neighborBombs = addNumbers(i, x);
      }

      if (!iAmAMine && neighborBombs === 0) {
        arr[i][x].innerText = "";
      } else if (iAmAMine) {
        arr[i][x].innerText = "B";
      } else {
        arr[i][x].innerText = neighborBombs;
      }
    }
  }
}

//function for returning randomOrderedArr shuffled
function bombsEasy() {
  const arrFreebombs = [];
  const arrBombs = [];

  for (let i = 0; i < 100 - numMines; i++) {
    arrFreebombs.push("free");
  }
  for (let x = 0; x < numMines; x++) {
    arrBombs.push("bomb");
  }
  const mixedArr = arrFreebombs.concat(arrBombs);
  randomOrderedArr = mixedArr.sort(() => Math.random() - 0.5);
}
//main function- from here, we create the board and assign it the position of bombs and free cells.
function makingTable() {
  let level = prompt('Select a level--> hard/medium/easy');
  // level.toLowerCase();
  switch (level){
    case 'hard':
      numMines = 40;
    break;
    case 'medium':
      numMines = 30;
    break;
    case 'easy':
      numMines = 20;    
  };
  bombsEasy();
  for (let i = 0; i < 10; i++) {
    arr[i] = [];
    for (let x = 0; x < 10; x++) {
      let cell = document.createElement("div");
      cell.id = numIdCell;
      cell.classList.add(randomOrderedArr[numIdCell]);
      cell.classList.add("hidden");
      grid.appendChild(cell);
      arr[i].push(cell);
      numIdCell++;
      cell.addEventListener("click", () => {
        check(cell, i, x);
      });
    }
  }
}

makingTable();
paintBoard();

//FOR TESTING

module.exports = {bombsEasy:bombsEasy}
