const url = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0';

function getPokemon(url) {
  return fetch(url)
    .then((response) => response.json());
}

function getPokemonInfo(url) {
  return fetch(url)
    .then((response) => response.json());
}

/*
module.exports = {
  getPokemon,
  getPokemonInfo,
};
*/
