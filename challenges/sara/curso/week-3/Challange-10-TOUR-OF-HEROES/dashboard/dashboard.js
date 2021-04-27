let mainContainer = document.querySelector(".main__container");
let arrOfNum = [];

function getToDashBoard() {
  window.location.href = "http://127.0.0.1:5500/dashboard/dashboard.html";
}

function getToList() {
  window.location.href = "http://127.0.0.1:5500/hero-list/list.html";
}

function selectRandoNum(newArr, originalArr) {
  let randNum;
  let isNotIn = true;
  while (newArr.length < 4) {
    randNum = Math.floor(Math.random() * originalArr.length);
    for (let i = 0; i < newArr.lenght; i++) {
      if (newArr[i] === randNum) {
        isNotIn = false;
      }
    }
    if (isNotIn) {
      newArr.push(randNum);
    }
  }
  addRandomHeroes(arrOfNum, HEROES);
}

function addRandomHeroes(newArr, originalArr) {
  newArr.forEach((element) => {
    let hero = originalArr[element]["name"];
    let newCardHero = document.createElement("a");
    newCardHero.classList.add("main-container__anchor--card");
    newCardHero.innerText = hero;
    newCardHero.href =
      "http://127.0.0.1:5500/hero-detail/detail.html?id=" +
      originalArr[element]["id"] +
      "&index=" +
      element;
    mainContainer.appendChild(newCardHero);
  });
}

selectRandoNum(arrOfNum, HEROES);
