// const Helper = require('../../services/helper');

(function () {
  const wrapperDashboard = document.querySelector('.wrapper-dashboard');
  const limit = 20;
  let offset;
  offset = Math.floor(Math.random() * 100) + 1;

  const title = new Helper('h1');
  const h1 = title.htmlTagGenerator('PokeDashboard', 'wrapper-dashboard__title');
  wrapperDashboard.appendChild(h1);

  const services = new Services(null, limit, offset);
  services.getAllPokemons()

    .then((listDashboard) => {
      const randomPokemons = listDashboard.results.sort(() => Math.random() - 0.5);

      const list = new Helper('ul');
      const ul = list.htmlTagGenerator(null, 'wrapper-dashboard__list', null, null);
      wrapperDashboard.appendChild(ul);

      randomPokemons.slice(0, 4).forEach((pokemon) => {
        console.log(pokemon);

        const item = new Helper('li');
        const li = item.htmlTagGenerator(null, 'wrapper-dashboard__item', null, null);
        ul.appendChild(li);

        const link = new Helper('a');
        const a = link.htmlTagGenerator(pokemon.name, 'wrapper-dashboard__link', `http://127.0.0.1:5500/src/components/details/details.html?name=${pokemon.name}`);
        li.appendChild(a);
      });
    });
}());
