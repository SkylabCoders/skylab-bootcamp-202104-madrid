let nameContainer = document.querySelector(".main__first--name");
let idContainer = document.querySelector(".main__second--id");

function getToDashBoard() {
  window.location.href = "http://127.0.0.1:5500/dashboard/dashboard.html";
}

function getToList() {
  window.location.href = "http://127.0.0.1:5500/hero-list/list.html";
}

const params = new URLSearchParams(window.location.search);
let idHero = params.get("id");
let indexHero = params.get("index");

function loadPage() {
  let heroName = document.createElement("h1");
  let heroId = document.createElement("h3");
  nameContainer.appendChild(heroName);
  idContainer.appendChild(heroId);
  heroName.innerText = HEROES[indexHero]["name"];
  heroId.innerText = idHero;
}

loadPage();
