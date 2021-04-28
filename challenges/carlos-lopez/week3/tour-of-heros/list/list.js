let listNames = document.querySelector(".div--listNames");

//Functions
const url =
  "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/superHeroData.json";

function fetchInfo(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => renderListHeroes(data));
}

function renderListHeroes(arr) {
  for (let i = 0; i < arr.length; i++) {
    let divAnchor = document.createElement("div");
    divAnchor.className = 'div__listNames--div';
    let divId = document.createElement("div");
    divId.className = "div__listNames--id"
    let newAnchor = document.createElement("a");
    newAnchor.className = "div__listNames--anchor";

    listNames.appendChild(divAnchor);
    divAnchor.appendChild(divId);
    divAnchor.appendChild(newAnchor)
    newAnchor.href = "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/detail/detail.html?index=" + i
    newAnchor.innerText = `${arr[i].name}`;
    divId.innerText = `${arr[i].id} `; 
  }
}


function goToDashboard() {
  window.location.href =
    "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/dashboard/dashboard.html";
}
function goToList() {
  window.location.href =
    "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/list/list.html";
}
fetchInfo(url);
