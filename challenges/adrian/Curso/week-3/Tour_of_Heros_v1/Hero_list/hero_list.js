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
let listHeros = document.querySelector('.main__list');

function getToDashboard (){
    window.location.href = "http://127.0.0.1:5500/Dashboar/dashboard.html";
}

function getToHeroes (){
    window.location.href = "http://127.0.0.1:5500/Hero_list/hero_list.html"
}

/*function createHerosList(){
    for(i=0; i<heroes.length; i++){
        let anchorHero = document.createElement('a');
        listHeros.appendChild(anchorHero);
        anchorHero.innerText = heroes[i]['id'] + ' ' + heroes[i]["name"];
        anchorHero.href = "http://127.0.0.1:5500/Details/details.html?id=" + heroes[i]['id'] + "&index=" + i;
    }
}

/*function printInHerosList(){
    let anchorHero = document.createElement('a');
        listHeros.appendChild(anchorHero);
        anchorHero.innerText = heroes[i]['id'] + ' ' + heroes[i]["name"];
        anchorHero.href = "http://127.0.0.1:5500/Details/details.html?id=" + heroes[i]['id'] + "&index=" + i;
}






module.exports = {createHerosList: createHerosList};

/*let listHeros = document.querySelector('.main__list');
*/

function printHerosDetails(item, i){
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