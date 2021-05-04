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
}

// const detailsPage = new detailsPage(pokemon);

module.exports = DetailPage;
