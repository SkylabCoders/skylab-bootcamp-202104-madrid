(function papa() {
  const param = new URLSearchParams(location.search);
  const pokemonName = param.get('name');

  getPokemon(pokemonName).then((pokemito) => {
    const container = document.querySelector('.container');
    const description = document.createElement('p');
    description.innerText = pokemito.name;
    container.appendChild(description);
    const pokeImg = document.createElement('img');
    pokeImg.setAttribute('src', pokemito.sprites.front_shiny);
    container.appendChild(pokeImg);
  });
}());
