const CreateTopPokemons = require('./dashboard');
const { getPokes, getPokemon } = require('../../service/pokemon');

describe('Given a method paintTopPokemons', () => {
  describe('When calling it', () => {
    const newLocal = 'https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0';
    let pokemon = new CreateTopPokemons(newLocal);
    const anchor = document.createElement('a');
    anchor.className = 'dashboard__poke';
    const pokeImg = document.createElement('img');
    const pokeName = document.createElement('span');
    beforeEach(async () => {
      global.fetch = jest.fn().mockReturnValueOnce(
        Promise.resolve({
          json: jest.fn()
            .mockReturnValueOnce(Promise.resolve({
              id: 7, height: 5, weight: 90, name: 'squirtle', img: 'http://pokeapi.it/', results: ['aqua', 'green', 'yellow']
            }))
        })
      );
      pokemon = await getPokemon();
    });
    test('Then prueba should contain an array of 3 elements', () => {
      const prueba = pokemon.results;
      expect(prueba.length).toBe(3);
    });
    test('Then newOrdenOfPokemon should contain a new array of 3 elements', () => {
      const prueba = pokemon.results;
      const newOrdenOfPokemon = prueba.sort(() => Math.random() - 0.5);
      expect(newOrdenOfPokemon.length).toBe(3);
    });
    test('Then it should contain a new anchor', () => {
      document.body.innerHTML = '<a class="dashboard__poke"></a>';
      expect(document.body.innerHTML).toBe('<a class="dashboard__poke"></a>');
    });
    test('Then the anchor should contain a new img tag', () => {
      document.body.innerHTML = '<a class="dashboard__poke"></a>';
      const dashboardAnchor = document.querySelector('.dashboard__poke');
      dashboardAnchor.appendChild(pokeImg);
      expect(dashboardAnchor.innerHTML).toContain('<img>');
    });
    test('Then the new img tag has a src ="http://pokeapi.it/" ', () => {
      pokeImg.src = 'http://pokeapi.it';
      expect(pokeImg.src).toBe(pokemon.img);
    });
    test('Then the new span tag has the name of squirtle" ', () => {
      pokeName.innerHTML = pokemon.name;
      expect(pokeName.innerHTML).toContain('squirtle');
    });
    test('Then the anchor should contain a new span tag', () => {
      document.body.innerHTML = '<a class="dashboard__poke"></a>';
      const dashboardAnchor = document.querySelector('.dashboard__poke');
      dashboardAnchor.appendChild(pokeName);
      expect(dashboardAnchor.innerHTML).toContain('<span>');
    });
  });
});
