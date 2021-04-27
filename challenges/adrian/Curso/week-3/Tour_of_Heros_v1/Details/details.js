const heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
    ];

let dashboard = document.getElementById('dashboard');
let heros = document.getElementById('heros');

function getToDashboard (){
    window.location.href = "http://127.0.0.1:5500/Dashboar/dashboard.html";
}

function getToHeroes (){
    window.location.href = "http://127.0.0.1:5500/Hero_list/hero_list.html"
}

let detailDiv = document.querySelector('.main__list');
const params = new URLSearchParams(window.location.search);
const idHero = params.get("id");
const heroIndex = params.get("index");

function loadPage() {
    let heroName = document.createElement('h1');
    let heroId = document.createElement('h3');
    detailDiv.appendChild(heroName);
    detailDiv.appendChild(heroId);
    heroName.innerText = heroes[heroIndex]['name'];
    heroId.innerText = heroes[heroIndex]['id'];
  }

  loadPage();