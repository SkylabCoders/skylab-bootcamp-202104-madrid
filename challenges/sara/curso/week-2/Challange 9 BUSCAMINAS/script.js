const grid = document.querySelector(".grid");
const start = document.querySelector(".start");
let arrOfSquares = [];
let shuffleArr = [];
let index = 0;
let bombs = 0;

function endGame() {
  setTimeout(function () {
    arrOfSquares = [];
    shuffleArr = [];
    index = 0;
    bombs = 0;
    grid.innerHTML = "";
  }, 2000);
}

function addFlag(square) {
  square.classList.toggle("flag");
}

function checkNeighbour(square, i, j) {
  if (i === 0) {
    if (j === 0) {
      if (arrOfSquares[i][j + 1].innerText !== "") {
        square = arrOfSquares[i][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i][j + 1];
        square.classList.remove("flag");
        check(square, i, j + 1);
      }
      if (arrOfSquares[i + 1][j].innerText !== "") {
        square = arrOfSquares[i + 1][j];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j];
        square.classList.remove("flag");
        check(square, i + 1, j);
      }
      if (arrOfSquares[i + 1][j + 1].innerText !== "") {
        square = arrOfSquares[i + 1][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j + 1];
        square.classList.remove("flag");
        check(square, i + 1, j + 1);
      }
    } else if (j === 9) {
      if (arrOfSquares[i][j - 1].innerText !== "") {
        square = arrOfSquares[i][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i][j - 1];
        square.classList.remove("flag");
        check(square, i, j - 1);
      }
      if (arrOfSquares[i + 1][j].innerText !== "") {
        square = arrOfSquares[i + 1][j];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j];
        square.classList.remove("flag");
        check(square, i + 1, j);
      }
      if (arrOfSquares[i + 1][j - 1].innerText !== "") {
        square = arrOfSquares[i + 1][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j - 1];
        square.classList.remove("flag");
        check(square, i + 1, j - 1);
      }
    } else {
      if (arrOfSquares[i][j - 1].innerText !== "") {
        square = arrOfSquares[i][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i][j - 1];
        square.classList.remove("flag");
        check(square, i, j - 1);
      }
      if (arrOfSquares[i][j + 1].innerText !== "") {
        square = arrOfSquares[i][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i][j + 1];
        square.classList.remove("flag");
        check(square, i, j + 1);
      }
      if (arrOfSquares[i + 1][j].innerText !== "") {
        square = arrOfSquares[i + 1][j];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j];
        square.classList.remove("flag");
        check(square, i + 1, j);
      }
      if (arrOfSquares[i + 1][j - 1].innerText !== "") {
        square = arrOfSquares[i + 1][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j - 1];
        square.classList.remove("flag");
        check(square, i + 1, j - 1);
      }
      if (arrOfSquares[i + 1][j + 1].innerText !== "") {
        square = arrOfSquares[i + 1][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j + 1];
        square.classList.remove("flag");
        check(square, i + 1, j + 1);
      }
    }
  } else if (i === 9) {
    if (j === 0) {
      if (arrOfSquares[i - 1][j].innerText !== "") {
        square = arrOfSquares[i - 1][j];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j];
        square.classList.remove("flag");
        check(square, i - 1, j);
      }
      if (arrOfSquares[i][j + 1].innerText !== "") {
        square = arrOfSquares[i][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i][j + 1];
        square.classList.remove("flag");
        check(square, i, j + 1);
      }
      if (arrOfSquares[i - 1][j + 1].innerText !== "") {
        square = arrOfSquares[i - 1][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j + 1];
        square.classList.remove("flag");
        check(square, i - 1, j + 1);
      }
    } else if (j === 9) {
      if (arrOfSquares[i - 1][j].innerText !== "") {
        square = arrOfSquares[i - 1][j];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j];
        square.classList.remove("flag");
        check(square, i - 1, j);
      }
      if (arrOfSquares[i][j - 1].innerText !== "") {
        square = arrOfSquares[i][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i][j - 1];
        square.classList.remove("flag");
        check(square, i, j - 1);
      }
      if (arrOfSquares[i - 1][j - 1].innerText !== "") {
        square = arrOfSquares[i - 1][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j - 1];
        square.classList.remove("flag");
        check(square, i - 1, j - 1);
      }
    } else {
      if (arrOfSquares[i - 1][j].innerText !== "") {
        square = arrOfSquares[i - 1][j];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j];
        square.classList.remove("flag");
        check(square, i - 1, j);
      }
      if (arrOfSquares[i][j + 1].innerText !== "") {
        square = arrOfSquares[i][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i][j + 1];
        square.classList.remove("flag");
        check(square, i, j + 1);
      }
      if (arrOfSquares[i][j - 1].innerText !== "") {
        square = arrOfSquares[i][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i][j - 1];
        square.classList.remove("flag");
        check(square, i, j - 1);
      }
      if (arrOfSquares[i - 1][j - 1].innerText !== "") {
        square = arrOfSquares[i - 1][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j - 1];
        square.classList.remove("flag");
        check(square, i - 1, j - 1);
      }
      if (arrOfSquares[i - 1][j + 1].innerText !== "") {
        square = arrOfSquares[i - 1][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j + 1];
        square.classList.remove("flag");
        check(square, i - 1, j + 1);
      }
    }
  } else {
    if (j === 0) {
      if (arrOfSquares[i - 1][j].innerText !== "") {
        square = arrOfSquares[i - 1][j];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j];
        square.classList.remove("flag");
        check(square, i - 1, j);
      }
      if (arrOfSquares[i + 1][j].innerText !== "") {
        square = arrOfSquares[i + 1][j];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j];
        square.classList.remove("flag");
        check(square, i + 1, j);
      }
      if (arrOfSquares[i][j + 1].innerText !== "") {
        square = arrOfSquares[i][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i][j + 1];
        square.classList.remove("flag");
        check(square, i, j + 1);
      }
      if (arrOfSquares[i - 1][j + 1].innerText !== "") {
        square = arrOfSquares[i - 1][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j + 1];
        square.classList.remove("flag");
        check(square, i - 1, j + 1);
      }
      if (arrOfSquares[i + 1][j + 1].innerText !== "") {
        square = arrOfSquares[i + 1][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j + 1];
        square.classList.remove("flag");
        check(square, i + 1, j + 1);
      }
    } else if (j === 9) {
      if (arrOfSquares[i - 1][j].innerText !== "") {
        square = arrOfSquares[i - 1][j];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j];
        square.classList.remove("flag");
        check(square, i - 1, j);
      }
      if (arrOfSquares[i + 1][j].innerText !== "") {
        square = arrOfSquares[i + 1][j];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j];
        square.classList.remove("flag");
        check(square, i + 1, j);
      }
      if (arrOfSquares[i][j - 1].innerText !== "") {
        square = arrOfSquares[i][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i][j - 1];
        square.classList.remove("flag");
        check(square, i, j - 1);
      }
      if (arrOfSquares[i - 1][j - 1].innerText !== "") {
        square = arrOfSquares[i - 1][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j - 1];
        square.classList.remove("flag");
        check(square, i - 1, j - 1);
      }
      if (arrOfSquares[i + 1][j - 1].innerText !== "") {
        square = arrOfSquares[i + 1][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j - 1];
        square.classList.remove("flag");
        check(square, i + 1, j - 1);
      }
    } else {
      if (arrOfSquares[i - 1][j].innerText !== "") {
        square = arrOfSquares[i - 1][j];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j];
        square.classList.remove("flag");
        check(square, i - 1, j);
      }
      if (arrOfSquares[i + 1][j].innerText !== "") {
        square = arrOfSquares[i + 1][j];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j];
        square.classList.remove("flag");
        check(square, i + 1, j);
      }
      if (arrOfSquares[i][j - 1].innerText !== "") {
        square = arrOfSquares[i][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i][j - 1];
        square.classList.remove("flag");
        check(square, i, j - 1);
      }
      if (arrOfSquares[i][j + 1].innerText !== "") {
        square = arrOfSquares[i][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i][j + 1];
        square.classList.remove("flag");
        check(square, i, j + 1);
      }
      if (arrOfSquares[i - 1][j - 1].innerText !== "") {
        square = arrOfSquares[i - 1][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j - 1];
        square.classList.remove("flag");
        check(square, i - 1, j - 1);
      }
      if (arrOfSquares[i - 1][j + 1].innerText !== "") {
        square = arrOfSquares[i - 1][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i - 1][j + 1];
        square.classList.remove("flag");
        check(square, i - 1, j + 1);
      }
      if (arrOfSquares[i + 1][j - 1].innerText !== "") {
        square = arrOfSquares[i + 1][j - 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j - 1];
        square.classList.remove("flag");
        check(square, i + 1, j - 1);
      }
      if (arrOfSquares[i + 1][j + 1].innerText !== "") {
        square = arrOfSquares[i + 1][j + 1];
        square.classList.remove("hidden");
      } else {
        square = arrOfSquares[i + 1][j + 1];
        square.classList.remove("flag");
        check(square, i + 1, j + 1);
      }
    }
  }
}

function checkWhatIsInIt(square, i, j) {
  if (square.innerText !== "") {
    square.classList.remove("hidden");
    return;
  } else {
    checkNeighbour(square, i, j);
  }
}

function check(square, i, j) {
  if (square.classList.contains("flag")) {
    return;
  }
  if (square.classList.contains("bomb")) {
    square.classList.remove("hidden");
    alert("Game Over");
    endGame();
    return;
  } else if (square.classList.contains("checked")) {
    //do nothing
    return;
  } else {
    square.classList.add("checked");
    square.classList.remove("hidden");
    checkWhatIsInIt(square, i, j);
  }
}

function shuffleTheArray() {
  for (let i = 0; i < 100; i++) {
    if (i < bombs) {
      shuffleArr.push("bomb");
    } else {
      shuffleArr.push("empty");
    }
  }
  shuffleArr = shuffleArr.sort(() => Math.random() - 0.5);
}

function create() {
  shuffleTheArray();
  for (let i = 0; i < 10; i++) {
    arrOfSquares[i] = [];
    for (let j = 0; j < 10; j++) {
      let square = document.createElement("div");
      square.id = index;
      square.classList.add(shuffleArr[index]);
      square.classList.add("hidden");
      grid.appendChild(square);
      arrOfSquares[i].push(square);
      index++;
      square.addEventListener("click", () => {
        check(square, i, j);
      });
      square.oncontextmenu = function (e) {
        e.preventDefault();
        addFlag(square);
      };
    }
  }
}

function calculateNumber(i, j) {
  let total = 0;
  if (i === 0) {
    if (j === 0) {
      if (arrOfSquares[i][j + 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j + 1].classList.contains("bomb")) {
        total++;
      }
    } else if (j === 9) {
      if (arrOfSquares[i][j - 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j - 1].classList.contains("bomb")) {
        total++;
      }
    } else {
      if (arrOfSquares[i][j - 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i][j + 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j - 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j + 1].classList.contains("bomb")) {
        total++;
      }
    }
  } else if (i === 9) {
    if (j === 0) {
      if (arrOfSquares[i - 1][j].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i][j + 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i - 1][j + 1].classList.contains("bomb")) {
        total++;
      }
    } else if (j === 9) {
      if (arrOfSquares[i - 1][j].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i][j - 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i - 1][j - 1].classList.contains("bomb")) {
        total++;
      }
    } else {
      if (arrOfSquares[i - 1][j].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i][j + 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i][j - 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i - 1][j - 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i - 1][j + 1].classList.contains("bomb")) {
        total++;
      }
    }
  } else {
    if (j === 0) {
      if (arrOfSquares[i - 1][j].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i][j + 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i - 1][j + 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j + 1].classList.contains("bomb")) {
        total++;
      }
    } else if (j === 9) {
      if (arrOfSquares[i - 1][j].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i][j - 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i - 1][j - 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j - 1].classList.contains("bomb")) {
        total++;
      }
    } else {
      if (arrOfSquares[i - 1][j].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i][j - 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i][j + 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i - 1][j - 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i - 1][j + 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j - 1].classList.contains("bomb")) {
        total++;
      }
      if (arrOfSquares[i + 1][j + 1].classList.contains("bomb")) {
        total++;
      }
    }
  }
  return total;
}

function giveNumbers() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let total = 0;
      let isBomb = false;

      if (arrOfSquares[i][j].classList.contains("bomb")) {
        isBomb = true;
      }

      if (isBomb === false) {
        total = calculateNumber(i, j);
      }

      if (isBomb === false && total === 0) {
        arrOfSquares[i][j].innerText = "";
      } else if (isBomb) {
        arrOfSquares[i][j].innerText = "B";
      } else {
        arrOfSquares[i][j].innerText = total;
      }
    }
  }
}

start.addEventListener("click", () => {
  let level = prompt("easy, medium, hard");
  level.toLowerCase();
  switch (level) {
    case "easy":
      bombs = 10;
      break;
    case "medium":
      bombs = 20;
      break;
    case "hard":
      bombs = 30;
      break;
    default:
      bombs = 20;
      break;
  }
  create();
  giveNumbers();
});
