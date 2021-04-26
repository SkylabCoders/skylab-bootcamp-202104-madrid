let dashButton = document.querySelector(".dashboard__button");
let listButton = document.querySelector(".list__button");

const HEROES = [
  { id: 11, name: "Dr Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" },
];

function getToDashBoard() {
  window.location.href = "http://127.0.0.1:5500/dashboard/dashboard.html";
}

function getToList() {
  window.location.href = "http://127.0.0.1:5500/hero-list/list.html";
}

function createTheList(arr) {
  for (let i = 0; i < arr.length; i++) {
    let mainContainerList = document.querySelector(
      ".list-main__container--first"
    );
    let newAnchor = document.createElement("a");
    newAnchor.innerText = arr[i]["id"] + " " + arr[i]["name"];
    mainContainerList.appendChild(newAnchor);
  }
}

createTheList(HEROES);

module.exports = { createTheList: createTheList };
