


let dashboard = document.getElementById('dashboard');
let heros = document.getElementById('heros');
let listHeros = document.querySelector('.main__list');

function getToDashboard (){
    window.location.href = "http://127.0.0.1:5500/Dashboar/dashboard.html";
}

function getToHeroes (){
    window.location.href = "http://127.0.0.1:5500/Hero_list/hero_list.html"
}



/*function printHerosDetails(item, i){
    let anchorHero = document.createElement('a');
        listHeros.appendChild(anchorHero);
        anchorHero.innerText = item.id + ' ' + item.name;
        anchorHero.href = "http://127.0.0.1:5500/hero-detail/detail.html?id=" + item.id + "&index=" + i;
}

function createHerosList(list){
    for(i=0; i<list.length; i++){
        printHerosDetails(list[i], i);
    }
}

createHerosList(heroes);

module.exports = {createHerosList:createHerosList,printHerosDetails:printHerosDetails}
*/