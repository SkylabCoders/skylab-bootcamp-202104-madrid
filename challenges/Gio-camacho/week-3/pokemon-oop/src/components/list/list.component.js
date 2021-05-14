(function () {
  const limit = 12;
  let offset;
  offset = 0;

  const wrapperList = document.querySelector('.wrapper-list');

  /* Creating the Navbar */
  const navbar = new Helper('nav');
  const nav = navbar.htmlTagGenerator(null, 'wrapper-list__navbar');
  wrapperList.appendChild(nav);

  const title = new Helper('a');
  const anchorLogo = title.htmlTagGenerator('PokeList', 'wrapper-list__title', 'http://127.0.0.1:5500/src/components/list/list.html', null);
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
  const pokemons = new Services(null, limit, offset);

  const list = new Helper('ul');
  const ul = list.htmlTagGenerator(null, 'wrapper-list__list', null, null);
  wrapperList.appendChild(ul);

  pokemons.getAllPokemons()
    .then((dataList) => {
      /* Iterating every pokemon and rendering on the DOM */
      dataList.results.forEach((pokemon) => {
        const getPokemonServices = new Services(pokemon.name);
        getPokemonServices.getPokemon()
          .then((pokemito) => {
            const item = new Helper('li');
            const li = item.htmlTagGenerator(null, 'wrapper-list__item', null, null);
            ul.appendChild(li);

            const link = new Helper('a');
            const anchor = link.htmlTagGenerator(null, 'wrapper-list__link', `http://127.0.0.1:5500/src/components/details/details.html?name=${pokemon.name}`, null);
            li.appendChild(anchor);

            const pokemonImage = new Helper('img');
            const urlPokemon = pokemito.sprites.other.dream_world.front_default;
            const pokemonImg = pokemonImage.htmlTagGenerator(null, 'wrapper-list__img', null, urlPokemon);
            anchor.appendChild(pokemonImg);

            const pokeTitle = new Helper('h2');
            const h2 = pokeTitle.htmlTagGenerator(pokemito.name, 'wrapper-list__subtitle');
            li.appendChild(h2);

            const spanAbility = new Helper('span');
            const ability = pokemito.abilities[0].ability.name;
            const span = spanAbility.htmlTagGenerator(ability, 'wrapper-list__span');
            li.appendChild(span);
          });
      });
    });

  const containerBtn = new Helper('div');
  const containerButton = containerBtn.htmlTagGenerator(null, 'wrapper-list__container');
  wrapperList.appendChild(containerButton);

  const btn = new Helper('button');

  const buttonPrevious = btn.htmlTagGenerator('Previous', 'wrapper-list__previous', null, null);
  containerButton.appendChild(buttonPrevious);

  const buttonNext = btn.htmlTagGenerator('Next', 'wrapper-list__next', null, null);
  containerButton.appendChild(buttonNext);

  buttonNext.addEventListener('click', () => {
    if (offset >= 0) {
      offset += limit;
    }

    const nextPagination = new Services(null, limit, offset);

    nextPagination.getAllPokemons()
      .then((dataList) => {
        ul.innerHTML = '';

        /* Iterating every pokemon and rendering on the DOM */
        dataList.results.forEach((pokemon) => {
          const getNextPokemons = new Services(pokemon.name);
          getNextPokemons.getPokemon()
            .then((nextPokemito) => {
              const item = new Helper('li');
              const li = item.htmlTagGenerator(null, 'wrapper-list__item', null, null);
              ul.appendChild(li);

              const link = new Helper('a');
              const anchorNext = link.htmlTagGenerator(null, 'wrapper-list__link', `http://127.0.0.1:5500/src/components/details/details.html?name=${pokemon.name}`, null);
              li.appendChild(anchorNext);

              const pokemonImage = new Helper('img');
              const urlPokemon = nextPokemito.sprites.other.dream_world.front_default;
              const pokemonImg = pokemonImage.htmlTagGenerator(null, 'wrapper-list__img', null, urlPokemon);
              anchorNext.appendChild(pokemonImg);

              const pokeTitle = new Helper('h2');
              const h2 = pokeTitle.htmlTagGenerator(nextPokemito.name, 'wrapper-list__subtitle');
              li.appendChild(h2);

              const spanAbility = new Helper('span');
              const ability = nextPokemito.abilities[0].ability.name;
              const span = spanAbility.htmlTagGenerator(ability, 'wrapper-list__span');
              li.appendChild(span);
            });
        });
      });
  });

  buttonPrevious.addEventListener('click', () => {
    if (offset >= 0) {
      offset -= limit;
    }

    const previousPagination = new Services(null, limit, offset);

    previousPagination.getAllPokemons()
      .then((dataList) => {
        ul.innerHTML = '';

        /* Iterating every pokemon and rendering on the DOM */
        dataList.results.forEach((pokemon) => {
          const getPreviousPokemons = new Services(pokemon.name);
          getPreviousPokemons.getPokemon()
            .then((previousPokemito) => {
              const item = new Helper('li');
              const li = item.htmlTagGenerator(null, 'wrapper-list__item', null, null);
              ul.appendChild(li);

              const link = new Helper('a');
              const anchorPrevious = link.htmlTagGenerator(null, 'wrapper-list__link', `http://127.0.0.1:5500/src/components/details/details.html?name=${pokemon.name}`, null);
              li.appendChild(anchorPrevious);

              const pokemonImage = new Helper('img');
              const urlPokemon = previousPokemito.sprites.other.dream_world.front_default;
              const pokemonImg = pokemonImage.htmlTagGenerator(null, 'wrapper-list__img', null, urlPokemon);
              anchorPrevious.appendChild(pokemonImg);

              const pokeTitle = new Helper('h2');
              const h2 = pokeTitle.htmlTagGenerator(previousPokemito.name, 'wrapper-list__subtitle');
              li.appendChild(h2);

              const spanAbility = new Helper('span');
              const ability = previousPokemito.abilities[0].ability.name;
              const span = spanAbility.htmlTagGenerator(ability, 'wrapper-list__span');
              li.appendChild(span);
            });
        });
      });
  });
}());
