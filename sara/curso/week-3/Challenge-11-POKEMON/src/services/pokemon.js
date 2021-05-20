function getPokes(url) {
  return fetch(url)
    .then((response) => response.json());
}

function getPokemon(url) {
  return fetch(url)
    .then((response) => response.json());
}

module.exports = {
  getPokes,
  getPokemon,
};
