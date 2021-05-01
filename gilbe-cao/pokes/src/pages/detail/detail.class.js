class DetailPage {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

  drawName() {
    const nameTitle = document.getElementById('name-title');
    nameTitle.textContent = this.pokemon
      ? this.pokemon.name
      : '<no name>';

    return nameTitle;
  }

  drawImage() {
    const imageElement = document.getElementById('image');
    imageElement.src = this.pokemon.sprites.front_default;
  }
}

module.exports = DetailPage;
