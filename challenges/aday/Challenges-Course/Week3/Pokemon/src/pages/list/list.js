const buttonNext = document.querySelector('.next-page');
const buttonPrev = document.querySelector('.prev-page');
let thisPage;

(function ListPage(url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0') {
  this.refreshList(url);
}());

async function refreshList(url) {
  getPokemon(url).then((response) => {
    thisPage = response;
    const pokeList = document.getElementById('poke-list');
    pokeList.innerHTML = '';
    response.results.forEach((pokemons) => {
      getPokemon(pokemons.url).then((mypokemon) => {
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
}

buttonNext.addEventListener('click', () => {
  const newUrl = thisPage.next;
  this.refreshList(newUrl);
});

buttonPrev.addEventListener('click', () => {
  const newUrl = thisPage.previous;
  if (newUrl !== 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0') {
    this.refreshList(newUrl);
  }
});
