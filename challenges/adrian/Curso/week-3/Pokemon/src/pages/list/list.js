const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');
let thisTimePokemons;
function listPage(url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0') {
  getPokes(url).then((pokeResponse) => {
    thisTimePokemons = pokeResponse;
    const pokeList = document.getElementById('poke-list');
    pokeList.innerHTML = '';
    pokeResponse.results.forEach((poke) => {
      const listElement = document.createElement('li');
      const element = document.createElement('a');
      pokeList.appendChild(listElement);
      listElement.appendChild(element);
      element.innerHTML = poke.name;
      element.href = `http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Pokemon/src/pages/detail/detail.html?name=${poke.name}`;
    });
  });
}

buttonPrev.addEventListener('click', () => {
  const newUrl = thisTimePokemons.previous;
  if (newUrl !== 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0') {
    return listPage(newUrl);
  }
});
buttonNext.addEventListener('click', () => {
  console.log('next');
  const newUrl = thisTimePokemons.next;
  return listPage(newUrl);
});

const paginationNumbers = document.getElementsByClassName('pages');

paginationNumbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    paginationNumbers.forEach((e) => { e.className = 'pages'; });
    number.className = 'thisTimePage';
    const offset = event.target.id;
    const newUrl = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`;
    return listPage(newUrl);
  });
});

listPage();
