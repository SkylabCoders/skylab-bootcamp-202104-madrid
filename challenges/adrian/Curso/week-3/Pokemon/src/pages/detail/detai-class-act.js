const params = new URLSearchParams(window.location.search);
const pokeName = params.get('name');

(function () {
  let currentPokemon;
  getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then((pokemon) => {
    currentPokemon = new DetailPages(pokemon);
    currentPokemon.drawName();
    currentPokemon.drawImage();
  });
}());
