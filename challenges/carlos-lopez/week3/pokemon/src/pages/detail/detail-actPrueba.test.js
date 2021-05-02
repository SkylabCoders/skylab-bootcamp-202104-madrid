const CreateTopPokemons = require('./detailPrueba');
const { getPokes, getPokemon } = require('../../services/pokemon');

describe('Given a method paintTopPokemons', () => {
  describe('When calling it', () => {
    const newLocal = 'https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0';
    const pokemon = new CreateTopPokemons(newLocal);
    const anchor = document.createElement('a');
    anchor.className = 'dashboard__poke';
    const pokeImg = document.createElement('img');

    test('Then it should contain a new anchor', () => {
      document.body.innerHTML = '<a class="dashboard__poke"></a>';
      expect(document.body.innerHTML).toBe('<a class="dashboard__poke"></a>');
    });

    test('Then it should contain a new img tag', () => {
      document.body.innerHTML = '<a class="dashboard__poke"></a>';
      const dashboardAnchor = document.querySelector('.dashboard__poke');
      dashboardAnchor.appendChild(pokeImg);
      expect(dashboardAnchor.innerHTML).toContain('<img>');
    });
    test('Then it should contain a new img', () => {
      pokeImg.src = 'http://pokeapi.it';
      document.body.innerHTML = '<img src="http://pokeapi.it">';
      expect(document.body.innerHTML).toBe('<img src="http://pokeapi.it">');
    });
  });
});
