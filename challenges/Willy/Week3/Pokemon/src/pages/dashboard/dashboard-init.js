(function () {
    const fullPkmUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0'
    getPokes(fullPkmUrl).then((pokemon) => {
      shuffleTopPkm = []
      const pokemonForTop = new TopPokemons(pokemon);
      pokemonForTop.selectingTopPokemons();
    });
  }());