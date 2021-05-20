(function listPage() {
  getPokemon('https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0').then((response) => {
    const pokemons = response.results;
    const whisk1 = pokemons.sort(() => Math.random() - 0.5);
    const whisk2 = whisk1.slice(8, 12);
    const pokeList = document.getElementById('top-pokemon');
    pokeList.innerHTML = '';
    whisk2.forEach((pokemon) => {
      getPokemon(pokemon.url).then((mypokemon) => {
        const container = document.createElement('div');
        container.classList.add('foto');
        const picture = document.createElement('img');
        picture.src = mypokemon.sprites.front_default;
        container.appendChild(picture);
        const element = document.createElement('a');
        element.href = `../detail/detail.html?name=${mypokemon.name}`;
        element.innerText = mypokemon.name;
        container.appendChild(element);
        pokeList.appendChild(container);
      });
    });
  });
}());
