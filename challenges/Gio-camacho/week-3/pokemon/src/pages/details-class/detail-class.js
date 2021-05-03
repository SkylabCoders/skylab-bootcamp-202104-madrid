class Details {
  constructor(pokemons) {
    this.pokemons = pokemons;
  }

  renderImage() {
    const parent = document.querySelector('.container');
    const pokeImage = document.createElement('img');
    pokeImage.src = this.pokemons.sprites.front_default;
    parent.appendChild(pokeImage);
  }

  renderName() {
    const parent = document.querySelector('.container');
    const pokeName = document.createElement('p');
    pokeName.textContent = this.pokemons.name;
    parent.appendChild(pokeName);
  }
}
const param = new URLSearchParams(window.location.search);
const pokemonName = param.get('name');

getPokemon(pokemonName).then((res) => {
  const pokemonsObj = new Details(res);
  console.log(pokemonsObj);
});
