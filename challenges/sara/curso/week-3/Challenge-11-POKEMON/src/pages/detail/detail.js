class DetailPage {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

  paintName() {
    const [pokeNameContainer] = document.getElementsByClassName('poke-name');
    pokeNameContainer.innerHTML = this.pokemon ? this.pokemon.name : '<no name>';
  }

  paintImg() {
    const pokeImg = document.getElementById('poke-img');
    const pokeImgBack = document.getElementById('poke-img-back');
    pokeImgBack.setAttribute('src', this.pokemon.sprites.back_default);
    pokeImg.setAttribute('src', this.pokemon.sprites.front_default);
  }

  addAditionalInfo() {
    const newDiv = document.createElement('div');
    const main = document.querySelector('main');
    main.appendChild(newDiv);
    newDiv.innerText = `\t- Height: ${this.pokemon.height} cm \n\t- Weight: ${this.pokemon.weight} kg`;
  }
}

module.exports = DetailPage;
