class Pokemones {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

  drawName() {
    const pokemonName = document.querySelector('.poke-name');
    pokemonName.textContent = this.pokemon.name;
  }

  drawImage() {
    const pokemonImg = document.querySelector('.div__details');
    pokemonImg.src = this.pokemon.sprites.front_default;
  }
}

module.exports = Pokemones;
