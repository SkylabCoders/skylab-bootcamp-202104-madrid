let dashButton = document.querySelector(".dashboard__button");
let listButton = document.querySelector(".list__button");

dashButton.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/dashboard/dashboard.html";
});

listButton.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/hero-list/list.html";
});
