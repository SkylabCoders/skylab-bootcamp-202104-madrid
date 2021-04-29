let dashboard = document.getElementById("dashboard");
let heros = document.getElementById("heros");
let divCardHero = document.querySelector("#main__section--card");

// butons nav functions
function getToDashboard() {
    window.location.href =
    "http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Dashboar/dashboard.html";
}

function getToHeroes() {
    window.location.href =
    "http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Hero_list/hero_list.html";
}

//get info from json
let urlJsonHeros =
"http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/superHeroData.json";
function fetchInfo(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((data) => createDivs(data));
}



//functions to create a divs
function createDivs(inputArray) {
    let newArr = inputArray.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 4; i++) {
        let newDiv = document.createElement("a");
        newDiv.classList.add("section__card");
        divCardHero.appendChild(newDiv);
        newDiv.innerText = newArr[i].name;    
        
    }
}


fetchInfo(urlJsonHeros);

