// IIEF (no hace falta invocarla, se invoca automáticamente) función de ejecución inmediata
(function ListPage() {
  // eslint-disable-next-line no-undef
  getPokemon(url).then((response) => {
    console.log(response);
    const pokeList = document.getElementById('poke-list');
    response.results.forEach((pokemon) => {
      const element = document.createElement('a');
      element.href = `../detail/detail.html?name=${pokemon.name}`;
      element.innerText = pokemon.name;
      pokeList.appendChild(element);
    });
  });
}());
