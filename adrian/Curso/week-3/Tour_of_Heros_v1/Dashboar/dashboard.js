const dashboard = document.getElementById('dashboard');
const heros = document.getElementById('heros');
const divCardHero = document.querySelector('#main__section--card');

// butons nav functions
function getToDashboard() {
  window.location.href = 'http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Dashboar/dashboard.html';
}

function getToHeroes() {
  window.location.href = 'http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Hero_list/hero_list.html';
}

// get info from json
const urlJsonHeros = 'http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/superHeroData.json';
function fetchInfo(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => createDivs(data));
}

// functions to create a divs
function createDivs(inputArray) {
  const newArr = inputArray.sort(() => Math.random() - 0.5);
  for (let i = 0; i < 4; i++) {
    const newAnchor = document.createElement('a');
    newAnchor.classList.add('section__card');
    divCardHero.appendChild(newAnchor);
    newAnchor.innerText = newArr[i].name;
  }
}

fetchInfo(urlJsonHeros);
