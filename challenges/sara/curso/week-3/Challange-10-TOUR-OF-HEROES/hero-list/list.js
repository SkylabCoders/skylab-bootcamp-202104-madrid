//DOM SELECTORS
let mainContainerList = document.querySelector(".list-main__container--first");

//onclick functions
function getToDashBoard() {
  window.location.href = "http://127.0.0.1:5500/dashboard/dashboard.html";
}

function getToList() {
  window.location.href = "http://127.0.0.1:5500/hero-list/list.html";
}

//functions
function createTheList() {
  for (let i = 0; i < HEROES.length; i++) {
    let newAnchor = document.createElement("a");
    newAnchor.innerText = HEROES[i]["id"] + " " + HEROES[i]["name"];
    newAnchor.href =
      "http://127.0.0.1:5500/hero-detail/detail.html?id=" +
      HEROES[i]["id"] +
      "&index=" +
      i;
    mainContainerList.appendChild(newAnchor);
  }
}

createTheList();
