let dashboard = document.getElementById('dashboard');
let heros = document.getElementById('heros');

let urlJsonHeros = 'http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/superHeroData.json'
function fetchInfo(url){
    return fetch(url)
    .then((response) => response.json())
    .then((data) => loadPage(data))
}

let divCardHero = document.querySelector('.main__section--card');

function createDivs(){
    for(let i = 0; i<4; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('section__card');
        divCardHero.appendChild(newDiv);

    }
}

createDivs()




function loadPage(arr){
    let arrHeros = arr 

}



let div1 = Math.floor(Math.random()*arrHeros.length)
let div2 = Math.floor(Math.random()*arrHeros.length)
let div3 = Math.floor(Math.random()*arrHeros.length)
let div4 = Math.floor(Math.random()*arrHeros.length)
let div5 = Math.floor(Math.random()*arrHeros.length)


function getToDashboard (){
    window.location.href = "http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Dashboar/dashboard.html";
}

function getToHeroes (){
    window.location.href = 'http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Hero_list/hero_list.html';
}
