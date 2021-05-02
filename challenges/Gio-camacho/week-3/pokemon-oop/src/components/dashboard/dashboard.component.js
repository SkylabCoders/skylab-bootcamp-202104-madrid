(function () {
  const wrapperDashboard = document.querySelector('.wrapper-dashboard');
  const limit = 20;
  let offset;
  offset = Math.floor(Math.random() * 100) + 1;

  /* Making a navbar */
  const navbar = new Helper('nav');
  const nav = navbar.htmlTagGenerator(null, 'wrapper-dashboard__navbar');
  wrapperDashboard.appendChild(nav);

  const title = new Helper('a');
  const h1 = title.htmlTagGenerator('Dashboard', 'wrapper-dashboard__title', 'http://127.0.0.1:5500/src/components/dashboard/dashboard.html');
  nav.appendChild(h1);

  const navbarList = new Helper('ul');
  const navbarUl = navbarList.htmlTagGenerator(null, 'wrapper-dashboard__navbar-list');
  nav.appendChild(navbarUl);

  const navbarItem = new Helper('li');
  const navbarLi = navbarItem.htmlTagGenerator(null, 'wrapper-dashboard__navbar-item');
  navbarUl.appendChild(navbarLi);

  const navbarLink = new Helper('a');
  const navbarListAnchor = navbarLink.htmlTagGenerator('PokeList', 'wrapper-dashboard__navbar-link', 'http://127.0.0.1:5500/src/components/list/list.html');
  navbarLi.appendChild(navbarListAnchor);

  /* Rendering PokeList */
  const services = new Services(null, limit, offset);
  services.getAllPokemons()

    .then((listDashboard) => {
      const randomPokemons = listDashboard.results.sort(() => Math.random() - 0.5);

      const list = new Helper('ul');
      const ul = list.htmlTagGenerator(null, 'wrapper-dashboard__list', null, null);
      wrapperDashboard.appendChild(ul);

      randomPokemons.slice(0, 4).forEach((pokemon) => {
        const item = new Helper('li');
        const li = item.htmlTagGenerator(null, 'wrapper-dashboard__item', null, null);
        ul.appendChild(li);

        const link = new Helper('a');
        const anchor = link.htmlTagGenerator(pokemon.name, 'wrapper-dashboard__link', `http://127.0.0.1:5500/src/components/details/details.html?name=${pokemon.name}`);
        li.appendChild(anchor);
      });
    });
}());
