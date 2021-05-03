//DOM SELECTORS
let mainContainerList = document.querySelector(".list-main__container--first");

//onclick functions
function getToDashBoard() {
  window.location.href =
    "http://127.0.0.1:5500/componentes/dashboard/dashboard.html";
}

function getToList() {
  window.location.href =
    "http://127.0.0.1:5500/componentes/hero-list/list.html";
}

//geting info from the JSON

const herosUrl = "./../../store/superHeroData.json";

function fetchInfo(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => createList(data));
}

//function to paint the list of anchors in the HTML

function createList(arr) {
  for (let i = 0; i < arr.length; i++) {
    let newAnchor = document.createElement("a");
    newAnchor.innerHTML = arr[i]["id"] + " " + arr[i]["name"];
    newAnchor.href =
      "http://127.0.0.1:5500/componentes/hero-detail/detail.html?id=" +
      arr[i]["id"] +
      "&index=" +
      i;
    mainContainerList.appendChild(newAnchor);
  }
}

fetchInfo(herosUrl);
