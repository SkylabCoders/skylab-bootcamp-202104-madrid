let listNamesDash = document.querySelector('.main--div');
const params = new URLSearchParams(window.location.search);
let index = params.get("index");

const url =
  "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/superHeroData.json";
function fetchInfo(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => renderListHeroes(data));
}

function renderListHeroes(arr) {
  for (let i = 0; i < 4; i++) {
    let newAnchor = document.createElement("a");
    let randomNum = Math.floor(Math.random() * arr.length)
    newAnchor.className = "main__div--a";
    listNamesDash.appendChild(newAnchor);
    newAnchor.href = "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/detail/detail.html?index=" + randomNum
    newAnchor.innerText = `${arr[randomNum].name}`;
  }
}

function goToDashboard(){
  window.location.href = "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/dashboard/dashboard.html";
}
function goToList(){
  window.location.href = "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/list/list.html";
}
fetchInfo(url);


