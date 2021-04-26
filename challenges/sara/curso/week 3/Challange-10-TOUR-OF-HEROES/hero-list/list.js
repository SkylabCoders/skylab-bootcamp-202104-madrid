let dashButton = document.querySelector(".dashboard__button");
let listButton = document.querySelector(".list__button");
let mainContainerList = document.querySelector(".list-main__container--first");

dashButton.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/dashboard/dashboard.html";
});

listButton.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/hero-list/list.html";
});

function createTheList() {
  for (let i = 0; i < HEROES.lenght; i++) {
    let newAnchor = document.createElement("a");
    mainContainerList.appendChild(newAnchor);
    newAnchor.innerText = "hola";
  }
}
