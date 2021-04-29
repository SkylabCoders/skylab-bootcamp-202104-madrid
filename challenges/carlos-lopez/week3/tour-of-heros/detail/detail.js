let mainDiv = document.querySelector(".main__div");
const params = new URLSearchParams(window.location.search);
const index = params.get("index");

const url =
  "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/superHeroData.json";

function fetchInfo(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => makingDetails(data));
}

function makingDetails(arr) {
  let hTag = document.createElement("h1");
  mainDiv.appendChild(hTag);
  hTag.id = 'mainName'
  hTag.innerText = arr[index].connections.groupAffiliation

  let divDetailsName = document.createElement("div");
  divDetailsName.className = "main__div--name";
  mainDiv.appendChild(divDetailsName);
  divDetailsName.innerText = `Name:  ${arr[index].name}`;

  let divDetailsId = document.createElement("div");
  divDetailsId.className = "main__div--id";
  mainDiv.appendChild(divDetailsId);
  divDetailsId.innerText = `Id:  ${arr[index].id}`;
}

function goToDashboard(){
  window.location.href = "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/dashboard/dashboard.html";
}
function goToList(){
  window.location.href = "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/list/list.html";
}

fetchInfo(url);