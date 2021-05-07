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
