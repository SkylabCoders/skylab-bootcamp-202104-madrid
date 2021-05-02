class TopPokemons {
    constructor(pokemon) {
      this.pokemon = pokemon;
    }

    selectingTopPokemons(){
      
      const assablePkm = this.pokemon.results;
      shuffleTopPkm = assablePkm.sort(() => Math.random() - 0.5);
      console.log(shuffleTopPkm)

      for (let i = 0; i < 4; i++){
        const selectPkm = shuffleTopPkm[i].url
        console.log(selectPkm)
        getPokemon(selectPkm).then((pokemon) =>{
          
        let mainContainer = document.querySelector(".main-container");
        let anchor = document.createElement("a");
        anchor.classList.add("main-container__anchor");
        anchor.href = `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${pokemon.name}`
        mainContainer.appendChild(anchor);
         
        let pkmImg = document.createElement('img')
        pkmImg.src = pokemon.sprites.front_default
        anchor.appendChild(pkmImg)
      })
    };
  }
  /*
    paintTopPOkemons() {
      console.log(this.pokemons);
      const prueba = this.pokemons.results;
      const newOrdenOfPokemon = prueba.sort(() => Math.random() - 0.5);
      console.log(newOrdenOfPokemon);
      for (let i = 0; i < 4; i++) {
        const currentPokeUrl = newOrdenOfPokemon[i].url;
        console.log(currentPokeUrl);
        getPokemon(currentPokeUrl).then((poke) => {
          const newAnchor = document.createElement('a');
          newAnchor.classList.add('dasboard__poke');
          const dashboardMain = document.querySelector('.header-container');
          dashboardMain.appendChild(newAnchor);
          const pokeImg = document.createElement('img');
          pokeImg.setAttribute('src', poke.sprites.front_default);
          newAnchor.appendChild(pokeImg);
          const pokeName = document.createElement('span');
          pokeName.innerHTML = poke.name;
          newAnchor.appendChild(pokeName);
        });
      }
    }*/
}


/*
const url = 'http://127.0.0.1:5500/Week3/Tour_of_Heroes/superHeroData.json';
function fetchInfo(url) {
return fetch(url)
.then((response) => response.json())
.then((data) => assambleTopHero(data));
}
fetchInfo(url)

let allHeroArr = []
let topHeroArr = []
function assambleTopHero(data){
for (let i = 0; i < data.length; i++){
    allHeroArr.push(data[i])
}
console.log(allHeroArr)
selectingTopHero(data)

}
function selectingTopHero(data) {
allHeroArr = allHeroArr.sort(() => Math.random() - 0.5);
for (let i = 0; i < 4; i++){
    topHeroArr.push(allHeroArr[i])
}
printHeroTop(topHeroArr)
console.log(topHeroArr)
}

function printHeroTop(topHeroArr){
    let mainContainer = document.getElementById("main__container");
    for (let i = 0; i < topHeroArr.length; i++){
    let anchorHero = document.createElement("a");
    let heroCard = topHeroArr[i].name;
    anchorHero.classList.add("container__hero");
    anchorHero.href = "http://127.0.0.1:5500/Week3/Tour_of_Heroes/detalles/detalles.html?id=" + topHeroArr[i].id +
    "&name=" +topHeroArr[i].name;
    anchorHero.innerText = heroCard;
    mainContainer.appendChild(anchorHero);
  };
}

module.exports = {printHeroTop:printHeroTop, selectingTopHero:selectingTopHero,assambleTopHero:assambleTopHero, fetchInfo:fetchInfo }

*/