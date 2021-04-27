let mainDiv = document.querySelector(".main__div");
const params = new URLSearchParams(window.location.search);
let index = params.get("index");

function makingDetails() {
  let divDetailsId = document.createElement("div");
  divDetailsId.className = "main__div--id";
  mainDiv.appendChild(divDetailsId);
  divDetailsId.innerText = heroes[index].id;

  let divDetailsName = document.createElement("div");
  divDetailsName.className = "main__div--name";
  mainDiv.appendChild(divDetailsName);
  divDetailsName.innerText = heroes[index].name;
}
function goToDashboard() {
  window.location.href =
    "http://127.0.0.1:5500/skylab-bootcamp-202104-madrid/challenges/carlos-lopez/week3/tour-of-heros/dashboard/dashboard.html";
}
function goToList() {
  window.location.href =
    "http://127.0.0.1:5500/skylab-bootcamp-202104-madrid/challenges/carlos-lopez/week3/tour-of-heros/list/list.html";
}

makingDetails();