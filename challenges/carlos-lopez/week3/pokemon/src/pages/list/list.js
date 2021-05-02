const buttonPrev = document.querySelector('.button__prev');
const buttonNext = document.querySelector('.button__next');
const paginationNumbers = document.querySelectorAll('.pages');
let thisTimePokemons;
function listPage(url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0') {
  getPokes(url).then((pokeResponse) => {
    thisTimePokemons = pokeResponse;
    const pokeList = document.getElementById('poke-list');
    pokeList.innerHTML = '';
    pokeResponse.results.forEach((poke) => {
      getPokemon(poke.url).then((myPoke) => {
        const listElement = document.createElement('li');
        const element = document.createElement('a');
        const pokeImg = document.createElement('img');
        pokeList.appendChild(listElement);
        listElement.appendChild(element);
        element.appendChild(pokeImg);
        pokeImg.setAttribute('src', myPoke.sprites.front_default);
        element.href = `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${myPoke.name}`;
      });
    });
  });
}
buttonPrev.addEventListener('click', () => {
  const newUrl = thisTimePokemons.previous;
  if (newUrl !== 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0') {
    return listPage(newUrl);
  }
});
buttonNext.addEventListener('click', () => {
  const newUrl = thisTimePokemons.next;
  return listPage(newUrl);
});
paginationNumbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    paginationNumbers.forEach((e) => { e.className = 'pages'; });
    number.className = 'thisTimePage';
    const offset = event.target.id;
    const newUrl = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`;
    return listPage(newUrl);
  });
});
