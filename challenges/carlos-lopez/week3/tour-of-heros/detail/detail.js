let mainDiv = document.querySelector(".main__div");
const params = new URLSearchParams(window.location.search);
let index = params.get("index");

const url =
  "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/superHeroData.json";

function fetchInfo(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => makingDetails(data));
}

function makingDetails(arr) {
  let divDetailsId = document.createElement("div");
  divDetailsId.className = "main__div--id";
  mainDiv.appendChild(divDetailsId);
  divDetailsId.innerText = arr[index].id;

  let divDetailsName = document.createElement("div");
  divDetailsName.className = "main__div--name";
  mainDiv.appendChild(divDetailsName);
  divDetailsName.innerText = arr[index].name;
}
function goToDashboard(){
  window.location.href = "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/dashboard/dashboard.html";
}
function goToList(){
  window.location.href = "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/list/list.html";
}

fetchInfo(url);