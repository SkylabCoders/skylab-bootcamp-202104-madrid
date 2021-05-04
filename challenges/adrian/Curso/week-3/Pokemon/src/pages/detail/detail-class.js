class DetailPages {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

  drawName() {
    const divDetail = document.getElementById('poke-details');
    const pokeName = document.createElement('h1');
    pokeName.innerHTML = this.pokemon.name;
    divDetail.appendChild(pokeName);
  }

  drawImage() {
    const divDetail = document.getElementById('poke-details');
    const pokeImage = document.createElement('img');
    pokeImage.src = this.pokemon.sprites.front_default;
    divDetail.appendChild(pokeImage);
  }

  drawHeigth() {
    const divDetail = document.getElementById('poke-details');
    const pokeHeigth = document.createElement('p');
    pokeHeigth.innerHTML = this.pokemon.id;
    divDetail.appendChild(pokeHeigth);
  }
}
// module.exports = DetailPages;
