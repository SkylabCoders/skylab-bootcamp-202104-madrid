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
  const anchorLogo = title.htmlTagGenerator('Dashboard', 'wrapper-dashboard__title', 'http://127.0.0.1:5500/src/components/dashboard/dashboard.html');
  nav.appendChild(anchorLogo);

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

      /* Iterating every pokemon and rendering on the DOM */
      randomPokemons.slice(0, 4).forEach((pokemon) => {
        const getPokemonServices = new Services(pokemon.name);
        getPokemonServices.getPokemon()
          .then((pokemito) => {
            console.log(pokemito);

            const item = new Helper('li');
            const li = item.htmlTagGenerator(null, 'wrapper-dashboard__item', null, null);
            ul.appendChild(li);

            const link = new Helper('a');
            const anchor = link.htmlTagGenerator(null, 'wrapper-dashboard__link', `http://127.0.0.1:5500/src/components/details/details.html?name=${pokemon.name}`);
            li.appendChild(anchor);

            const pokemonImage = new Helper('img');
            const urlPokemon = pokemito.sprites.other.dream_world.front_default;
            const pokemonImg = pokemonImage.htmlTagGenerator(null, 'wrapper-dashboard__img', null, urlPokemon);
            anchor.appendChild(pokemonImg);

            const pokeTitle = new Helper('h2');
            const h2 = pokeTitle.htmlTagGenerator(pokemito.name, 'wrapper-dashboard__subtitle');
            li.appendChild(h2);

            const spanAbility = new Helper('span');
            const ability = pokemito.abilities[0].ability.name;
            const span = spanAbility.htmlTagGenerator(ability, 'wrapper-dashboard__span');
            li.appendChild(span);
          });
      });
    });
}());
