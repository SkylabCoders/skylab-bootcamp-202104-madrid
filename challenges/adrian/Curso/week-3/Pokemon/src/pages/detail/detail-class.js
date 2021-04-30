class DetailPages {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

  drawName() {
    const divName = document.getElementById('poke-details');
    const pokeName = document.createElement('h1');
    pokeName.innerHTML = this.pokemon.name;
    divName.appendChild(pokeName);
  }
}

module.exports = DetailPages;
