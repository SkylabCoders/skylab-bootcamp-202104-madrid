// const { getPokemon } = require('../../services/pokemon');
const params = new URLSearchParams(window.location.search);
const pokeName = params.get('name');
(function detailPage() {
  getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then((pokemon) => {
    const pokeDetailContainer = document.querySelector('.div__details');
    const pokeImg = document.createElement('img');
    const pokeId = document.createElement('span');
    const pokeHeight = document.createElement('span');
    const pokeWeight = document.createElement('span');
    const pokeNameContainer = document.querySelector('.poke-name');
    pokeNameContainer.innerHTML = pokemon.name;
    pokeDetailContainer.appendChild(pokeImg);
    pokeImg.setAttribute('src', pokemon.sprites.front_default);
    pokeId.innerText = `ID: ${pokemon.id}`;
    console.log(pokemon.id);
    console.log(pokemon.height);
    console.log(pokemon.weight);
    pokeHeight.innerText = `Height: ${pokemon.height} rem`;
    pokeWeight.innerText = `Weight: ${pokemon.weight} rem`;
    pokeDetailContainer.appendChild(pokeId);
    pokeDetailContainer.appendChild(pokeHeight);
    pokeDetailContainer.appendChild(pokeWeight);
  });
}());
