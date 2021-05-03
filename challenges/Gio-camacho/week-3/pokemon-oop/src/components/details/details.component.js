(function () {
  const paras = new URLSearchParams(window.location.search);
  const pokeName = paras.get('name');

  const wrapperDetails = document.querySelector('.wrapper-details');

  /* Creating the Navbar */
  const navbar = new Helper('navbar');
  const nav = navbar.htmlTagGenerator(null, 'wrapper-details__navbar');
  wrapperDetails.appendChild(nav);

  const title = new Helper('a');
  const anchorLogo = title.htmlTagGenerator('Details', 'wrapper-details__title', `http://127.0.0.1:5500/src/components/details/details.html?name=${pokeName}`);
  nav.appendChild(anchorLogo);

  const navbarList = new Helper('ul');
  const navbarUl = navbarList.htmlTagGenerator(null, 'wrapper-details__navbar-list');
  nav.appendChild(navbarUl);

  const navbarItem = new Helper('li');
  const navbarLi = navbarItem.htmlTagGenerator(null, 'wrapper-details__navbar-item');
  navbarUl.appendChild(navbarLi);

  const navbarLink = new Helper('a');

  const navbarDashboardAnchor = navbarLink.htmlTagGenerator('Dashboard', 'wrapper-details__navbar-link', 'http://127.0.0.1:5500/src/components/dashboard/dashboard.html');
  navbarUl.appendChild(navbarDashboardAnchor);

  const navbarListAnchor = navbarLink.htmlTagGenerator('List', 'wrapper-details__navbar-link', 'http://127.0.0.1:5500/src/components/list/list.html');
  navbarUl.appendChild(navbarListAnchor);

  const services = new Services(pokeName);
  services.getPokemon()
    .then((pokemon) => {
      const card = new Helper('article');
      const article = card.htmlTagGenerator(null, 'wrapper-details__card', null, null);
      wrapperDetails.appendChild(article);

      const img = new Helper('img');
      const svgImage = pokemon.sprites.other.dream_world.front_default;
      const image = img.htmlTagGenerator(null, 'wrapper-details__img', null, svgImage);
      article.appendChild(image);

      const title = new Helper('h1');
      const h1 = title.htmlTagGenerator(pokemon.name.toUpperCase(), 'wrapper-details__title', null, null);
      article.appendChild(h1);

      const list = new Helper('ul');
      const ul = list.htmlTagGenerator(null, 'wrapper-details__list', null, null);
      article.appendChild(ul);

      const firstItem = new Helper('li');
      const firstLi = firstItem.htmlTagGenerator(null, 'wrapper-details__item');
      ul.appendChild(firstLi);

      const heightSubtitle = new Helper('span');
      const spanHight = heightSubtitle.htmlTagGenerator('Height');
      firstLi.appendChild(spanHight);

      const heightDescription = new Helper('span');
      const spanHightDescription = heightDescription.htmlTagGenerator(pokemon.height);
      firstLi.appendChild(spanHightDescription);

      const secondItem = new Helper('li');
      const secondLi = secondItem.htmlTagGenerator(null, 'wrapper-details__item');
      ul.appendChild(secondLi);

      const weightSubtitle = new Helper('span');
      const spanWeight = weightSubtitle.htmlTagGenerator('Weight');
      secondLi.appendChild(spanWeight);

      const weightDescription = new Helper('span');
      const spanWeightDescription = weightDescription.htmlTagGenerator(pokemon.height);
      secondLi.appendChild(spanWeightDescription);

      const thirdItem = new Helper('li');
      const thirdLi = thirdItem.htmlTagGenerator(null, 'wrapper-details__item');
      ul.appendChild(thirdLi);

      const abilitySubtitle = new Helper('span');
      const spanAbility = abilitySubtitle.htmlTagGenerator('Ability');
      thirdLi.appendChild(spanAbility);

      const abilityDescription = new Helper('span');
      const ability = pokemon.abilities[0].ability.name;
      const spanAbilityDescription = abilityDescription.htmlTagGenerator(ability);
      thirdLi.appendChild(spanAbilityDescription);

      const link = new Helper('a');
      const anchorDashboard = link.htmlTagGenerator('Back to dashboard', 'wrapper-details__back-dashboard', 'http://127.0.0.1:5500/src/components/dashboard/dashboard.html', null);
      article.appendChild(anchorDashboard);

      const anchorList = link.htmlTagGenerator('Back to list', 'wrapper-details__back-list', 'http://127.0.0.1:5500/src/components/list/list.html');
      article.appendChild(anchorList);
    });
}());
