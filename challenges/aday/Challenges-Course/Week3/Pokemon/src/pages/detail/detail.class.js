class DetailPage {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

  drawInfo() {
    const [container] = document.getElementsByClassName('body__main-container');
    const pokemonData = document.createElement('p');
    pokemonData.innerText = `\tName: ${this.pokemon.name} \n\tHeight: ${this.pokemon.height} \n\tWeight: ${this.pokemon.weight}`;
    container.appendChild(pokemonData);
  }

  drawPicture() {
    const [container] = document.getElementsByClassName('body__main-container');
    const imagen = document.createElement('img');
    imagen.src = this.pokemon.sprites.front_default;
    container.appendChild(imagen);
  }
}

module.exports = DetailPage;
