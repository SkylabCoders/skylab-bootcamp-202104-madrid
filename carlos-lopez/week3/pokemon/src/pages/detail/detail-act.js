const params = new URLSearchParams(window.location.search);
const pokeName = params.get('name');
(function () {
  const urlDetail = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  let pokemonDetail;
  getPokemon(urlDetail).then((pokemon) => {
    pokemonDetail = new PokemonDetail(pokemon);
    pokemonDetail.renderDetails();
  });
}());
