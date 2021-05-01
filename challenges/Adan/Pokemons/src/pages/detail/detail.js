(async function ListPage() {
  const params = new URLSearchParams(window.location.search);
  const pokemonName = params.get('name');
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const pokemon = await getPokemon(url);
  getPokemon(url).then((response) => {
    const pokemonDetail = document.querySelector('.pokemonDetail');
    const pokemon = document.createElement('div');
    pokemon.innerText = `\tName: ${response.name} \n\tHeight: ${response.height} \n\tWeight: ${response.weight}`;
    const imagen = document.createElement('img');
    imagen.src = response.sprites.front_default;
    pokemonDetail.appendChild(pokemon);
    pokemonDetail.appendChild(imagen);
  });
}());
