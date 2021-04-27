let listNames = document.querySelector(".div--listNames");
let newAnchor;

//Functions
function createAnchor() {
  for(let i = 0; i < heroes.length; i++){
    let newAnchor = document.createElement('a');
    listNames.appendChild(newAnchor);
    renderHero(heroes[i], i)
  };
};

function renderHero(hero,i){
  let mainContainerList = document.querySelector(".div--listNames");
    newAnchor.innerText = hero.id + " " + hero.name;
    newAnchor.href =
      "http://127.0.0.1:5500/hero-detail/detail.html?id=" +
      hero.id +
      "&index=" +i
    mainContainerList.appendChild(newAnchor);
};

function goToDashboard(){
  window.location.href ="http://127.0.0.1:5500/skylab-bootcamp-202104-madrid/challenges/carlos-lopez/week3/tour-of-heros/dashboard/dashboard.html";
}
function goToList(){
  window.location.href = "http://127.0.0.1:5500/skylab-bootcamp-202104-madrid/challenges/carlos-lopez/week3/tour-of-heros/list/list.html";

}
 
//createAnchor();
module.exports = {createAnchor:createAnchor, renderHero:renderHero}

