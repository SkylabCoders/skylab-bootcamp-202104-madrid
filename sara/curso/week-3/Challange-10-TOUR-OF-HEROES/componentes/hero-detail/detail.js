let nameContainer = document.querySelector(".main__first--name");
let idContainer = document.querySelector(".main__second--id");

function getToDashBoard() {
  window.location.href =
    "http://127.0.0.1:5500/componentes/dashboard/dashboard.html";
}

function getToList() {
  window.location.href =
    "http://127.0.0.1:5500/componentes/hero-list/list.html";
}

//geting info from the url

const params = new URLSearchParams(window.location.search);
let idHero = params.get("id");
let indexHero = params.get("index");

//geting info from the JSON

const herosUrl = "./../../store/superHeroData.json";

function fetchInfo(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => loadPage(data, idHero, indexHero));
}

function loadPage(arr, id, index) {
  let heroName = document.createElement("h1");
  let heroId = document.createElement("h3");
  nameContainer.appendChild(heroName);
  idContainer.appendChild(heroId);
  heroName.innerText = arr[index]["name"];
  heroId.innerText = id;
}

fetchInfo(herosUrl);

module.exports = {};
