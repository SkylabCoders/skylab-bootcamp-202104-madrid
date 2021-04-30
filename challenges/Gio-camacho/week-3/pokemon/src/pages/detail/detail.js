(function papa() {
  const param = new URLSearchParams(location.search);
  const pokemonName = param.get('name');

  getPokemon(pokemonName).then((pokemito) => {
    const container = document.querySelector('.container');

    const description = document.createElement('p');
    description.classList.add('container__description');
    description.innerText = pokemito.name;
    container.appendChild(description);

    const pokeImg = document.createElement('img');
    pokeImg.classList.add('container__img');
    pokeImg.setAttribute('src', pokemito.sprites.front_shiny);
    container.appendChild(pokeImg);

    const stats = document.createElement('span');
    stats.classList.add('container__stats');
    stats.innerText = pokemito.height;
    container.appendChild(stats);
  });
}());
