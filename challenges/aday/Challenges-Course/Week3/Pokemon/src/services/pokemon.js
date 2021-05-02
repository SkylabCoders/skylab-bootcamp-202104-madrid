function getPokemon(limit, offset) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset${offset}`)
    .then((response) => response.json());
}

function getPokemonInfo(url) {
  return fetch(url)
    .then((response) => response.json());
}

module.exports = {
  getPokemon,
  getPokemonInfo,
};
