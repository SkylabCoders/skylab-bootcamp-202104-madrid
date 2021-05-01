/* eslint-disable no-undef */
// IIEF (no hace falta invocarla, se invoca automáticamente) función de ejecución inmediata
(async function ListPage() {
  const params = new URLSearchParams(window.location.search);
  const pokemonName = params.get('name');
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const pokemon = await getPokemonInfo(url);
  const [container] = document.getElementsByClassName('body__main-container');
  const imagen = document.createElement('img');
  imagen.src = pokemon.sprites.front_default;
  container.appendChild(imagen);
  const pokemonData = document.createElement('h1');
  pokemonData.innerText = `\tName: ${pokemon.name} \n\tHeight: ${pokemon.height} \n\tWeight: ${pokemon.weight}`;
  container.appendChild(pokemonData);
  console.log(pokemon);
}());
