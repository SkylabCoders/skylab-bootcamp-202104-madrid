(function () {
  const wrapperList = document.querySelector('.wrapper-list');

  const title = new Helper('h1');
  const h1 = title.htmlTagGenerator('Pokemon', 'wrapper-list__title', null, null);
  wrapperList.appendChild(h1);

  const list = new Helper('ul');
  const ul = list.htmlTagGenerator(null, 'wrapper-list__list', null, null);
  wrapperList.appendChild(ul);

  const pokemons = new Services(null, 10, 0);

  pokemons.getAllPokemons().then((dataList) => {
    dataList.results.forEach((pokemon) => {
      const item = new Helper('li');
      const li = item.htmlTagGenerator(null, 'wrapper-list__item', null, null);

      const link = new Helper('a');
      const a = link.htmlTagGenerator(pokemon.name, 'wrapper-list__link', `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${pokemon.name}`, null);

      li.appendChild(a);
      ul.appendChild(li);
    });
  });

  const btn = new Helper('button');
  const buttonNext = btn.htmlTagGenerator('Next', 'wrapper-list__next', null, null);
  wrapperList.appendChild(buttonNext);

  const buttonPrevious = btn.htmlTagGenerator('Previous', 'wrapper-list__previous', null, null);
  wrapperList.appendChild(buttonPrevious);
}()
);
