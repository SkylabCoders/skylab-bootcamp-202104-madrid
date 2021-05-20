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
}
