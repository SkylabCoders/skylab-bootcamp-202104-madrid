(function () {
  const limit = 10;
  let offset;
  offset = 0;

  const wrapperList = document.querySelector('.wrapper-list');

  /* Creating the Navbar */
  const navbar = new Helper('nav');
  const nav = navbar.htmlTagGenerator(null, 'wrapper-list__navbar');
  wrapperList.appendChild(nav);

  const title = new Helper('a');
  const anchorLogo = title.htmlTagGenerator('PokeList', 'wrapper-list__title', null, null);
  nav.appendChild(anchorLogo);

  const navbarList = new Helper('ul');
  const navbarUl = navbarList.htmlTagGenerator(null, 'wrapper-list__navbar-list');
  nav.appendChild(navbarUl);

  const navbarItem = new Helper('li');
  const navbarLi = navbarItem.htmlTagGenerator(null, 'wrapper-list__navbar-item');
  navbarUl.appendChild(navbarLi);

  const navbarLink = new Helper('a');
  const navbarListAnchor = navbarLink.htmlTagGenerator('Dashboard', 'wrapper-list__navbar-link', 'http://127.0.0.1:5500/src/components/dashboard/dashboard.html');
  navbarLi.appendChild(navbarListAnchor);

  /* Rendering the list */
  const list = new Helper('ul');
  const ul = list.htmlTagGenerator(null, 'wrapper-list__list', null, null);
  wrapperList.appendChild(ul);

  const pokemons = new Services(null, limit, offset);

  pokemons.getAllPokemons().then((dataList) => {
    dataList.results.forEach((pokemon) => {
      const item = new Helper('li');
      const li = item.htmlTagGenerator(null, 'wrapper-list__item', null, null);

      const link = new Helper('a');
      const a = link.htmlTagGenerator(pokemon.name, 'wrapper-list__link', `http://127.0.0.1:5500/src/components/details/details.html?name=${pokemon.name}`, null);

      li.appendChild(a);
      ul.appendChild(li);
    });
  });

  const btn = new Helper('button');

  const buttonPrevious = btn.htmlTagGenerator('Previous', 'wrapper-list__previous', null, null);
  wrapperList.appendChild(buttonPrevious);

  const buttonNext = btn.htmlTagGenerator('Next', 'wrapper-list__next', null, null);
  wrapperList.appendChild(buttonNext);

  buttonNext.addEventListener('click', () => {
    if (offset >= 0) {
      offset += limit;
    }

    const nextPagination = new Services(null, limit, offset);

    nextPagination.getAllPokemons()
      .then((dataList) => {
        ul.innerHTML = '';

        dataList.results.forEach((pokemon) => {
          const item = new Helper('li');
          const li = item.htmlTagGenerator(null, 'wrapper-list__item', null, null);

          const link = new Helper('a');
          const a = link.htmlTagGenerator(pokemon.name, 'wrapper-list__link', `http://127.0.0.1:5500/src/components/details/details.html?name=${pokemon.name}`, null);

          li.appendChild(a);
          ul.appendChild(li);
        });
      });
  });

  buttonPrevious.addEventListener('click', () => {
    if (offset >= 10) {
      offset -= limit;
    }

    const previousPagination = new Services(null, limit, offset);

    previousPagination.getAllPokemons()
      .then((dataList) => {
        ul.innerHTML = '';

        dataList.results.forEach((pokemon) => {
          const item = new Helper('li');
          const li = item.htmlTagGenerator(null, 'wrapper-list__item', null, null);

          const link = new Helper('a');
          const a = link.htmlTagGenerator(pokemon.name, 'wrapper-list__link', `http://127.0.0.1:5500/src/components/details/detalles.html?name=${pokemon.name}`, null);

          li.appendChild(a);
          ul.appendChild(li);
        });
      });
  });
}());
