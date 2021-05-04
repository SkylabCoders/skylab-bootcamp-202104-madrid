(function () {
  getPokes('https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0').then((pokemons) => {
    const currentPokemons = new CreateTopPokemons(pokemons);
    currentPokemons.paintTopPokemons();
  });
}());
