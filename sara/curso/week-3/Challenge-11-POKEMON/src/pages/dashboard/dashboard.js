class CreateTopPokemons {
  constructor(pokemons) {
    this.pokemons = pokemons;
  }

  paintTopPokemons() {
    const prueba = this.pokemons.results;
    const newOrdenOfPokemon = prueba.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 4; i++) {
      const currentPokeUrl = newOrdenOfPokemon[i].url;
      getPokemon(currentPokeUrl).then((poke) => {
        const newAnchor = document.createElement('a');
        newAnchor.classList.add('dasboard__poke');
        const dashboardMain = document.querySelector('.dashboard');
        dashboardMain.appendChild(newAnchor);
        const pokeImg = document.createElement('img');
        pokeImg.setAttribute('src', poke.sprites.front_default);
        newAnchor.appendChild(pokeImg);
        const pokeName = document.createElement('span');
        pokeName.innerHTML = poke.name;
        newAnchor.href = `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${poke.name}`;
        newAnchor.appendChild(pokeName);
      });
    }
  }
}

module.exports = CreateTopPokemons;
