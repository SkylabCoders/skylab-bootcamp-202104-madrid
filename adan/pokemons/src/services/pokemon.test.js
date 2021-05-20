// const { getPokes, getPokemon } = require('./pokemon');

describe('Given an getPokes function', () => {
  describe('when its invoked', () => {
    describe('And limit is 3', () => {
      let pokemons;
      beforeEach(async () => {
        global.fetch = jest.fn().mockReturnValueOnce(Promise.resolve({
          json: jest.fn().mockReturnValueOnce({
            count: 3, results: [1, 2, 3], next: 'limit=3', previous: 'limit=3'
          })
        }));
        pokemons = await getPokes();
      });
      test('then results length is 3', () => {
        expect(pokemons.results.length).toBe(3);
      });
      test('then count is 3', () => {
        expect(pokemons.count).toBe(3);
      });
      test('the next will contain limit=3', () => {
        expect(pokemons.next).toContain('limit=3');
      });
      test('the next will contain limit=3', () => {
        expect(pokemons.previous).toContain('limit=3');
      });
    });
  });
});

describe('Given a getPokemon function', () => {
  describe('When is invoked with argument containing pokemon/charizard', () => {
    test('Then return object containing name: ditto', async () => {
      global.fetch = jest.fn()
        .mockReturnValueOnce(
          Promise.resolve({ // la promesa se resuelve con un objeto con una propiedad json
            json: jest.fn()
              .mockReturnValueOnce(
                Promise.resolve(
                  {
                    name: 'ditto'
                  }
                )
              )
          })
        );
      const pokemon = await getPokemon();
      expect(pokemon).toEqual({ name: 'ditto' });
    });
  });
});
// (async function ListPage() {
//   //   const params = new URLSearchParams(window.location.search);
//   //   const pokemonName = params.get('name');
//   //   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
//   //   const pokemon = await getPokemon(url);
