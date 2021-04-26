let dashButton = document.querySelector(".dashboard__button");
let listButton = document.querySelector(".list__button");
let mainContainerList = document.querySelector(".list-main__container--first");

function getToDashBoard() {
  window.location.href = "http://127.0.0.1:5500/dashboard/dashboard.html";
}

function getToList() {
  window.location.href = "http://127.0.0.1:5500/hero-list/list.html";
}

function createAnchor(index) {
  let newAnchor = document.createElement("a");
  newAnchor.innerText = HEROES[i]["id"] + " " + HEROES[i]["name"];
}

function createTheList() {
  for (let i = 0; i < HEROES.length; i++) {
    let newAnchor = createTheList(i);
    mainContainerList.appendChild(newAnchor);
  }
}

createTheList();
