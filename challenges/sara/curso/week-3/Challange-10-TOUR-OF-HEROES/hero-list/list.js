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
function createElement(element, index) {
  let newAnchor = document.createElement("a");
  newAnchor.innerText = element.id + " " + element.name;
  newAnchor.href =
    "http://127.0.0.1:5500/hero-detail/detail.html?id=" +
    element.id +
    "&index=" +
    index;
  mainContainerList.appendChild(newAnchor);
}

function createTheList(arr) {
  for (let i = 0; i < arr.length; i++) {
    createElement(arr[i], i);
  }
}

createTheList(HEROES);

module.exports = { createTheList };
