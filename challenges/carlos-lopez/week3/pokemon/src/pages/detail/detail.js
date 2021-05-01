class PokemonDetail {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

  renderDetails() {
    const pokeNameContainer = document.querySelector('.poke-name');
    const pokeImg = document.querySelector('.details__img--front');
    const pokeImgBack = document.querySelector('.details__img--back');
    const pokeId = document.querySelector('.details__id');
    const pokeHeight = document.querySelector('.details__height');
    const pokeWeight = document.querySelector('.details__weight');
    pokeImg.setAttribute('src', this.pokemon.sprites.front_default);
    pokeImgBack.setAttribute('src', this.pokemon.sprites.back_default);

    pokeNameContainer.innerHTML = this.pokemon.name;
    pokeId.innerText = `ID: ${this.pokemon.id}`;
    pokeHeight.innerText = `Height: ${this.pokemon.height} rem`;
    pokeWeight.innerText = `Weight: ${this.pokemon.weight} rem`;

    appendElements(pokeNameContainer, pokeImg, pokeImgBack, pokeId, pokeHeight, pokeWeight);
  }

  appendElements(pokeNameContainer, pokeImg, pokeImgBack, pokeId, pokeHeight, pokeWeight) {
    const pokeDetailContainer = document.querySelector('.div__details');
    const pokeImgContainer = document.querySelector('.details__img');
    pokeImgContainer.appendChild(this.pokeImg);
    pokeImgContainer.appendChild(this.pokeImgBack);
    pokeDetailContainer.appendChild(this.pokeId);
    pokeDetailContainer.appendChild(this.pokeHeight);
    pokeDetailContainer.appendChild(this.pokeWeight);
  }
}
module.exports = PokemonDetail;
