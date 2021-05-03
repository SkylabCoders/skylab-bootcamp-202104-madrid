const { getPokes, getPokemon } = require('./pokemon');

describe('given a function getPokes', () => {
  describe('when it is invoked', () => {
    describe('And limit is 3', () => {
      let pokemons;
      beforeEach(async () => {
        global.fetch = jest.fn().mockReturnValueOnce(Promise.resolve({
          json: jest.fn().mockReturnValueOnce(Promise.resolve({
            count: 3, result: [1, 2, 3], next: 'limit=3', previous: 'limit=3',
          })),
        }));
        pokemons = await getPokes();
      });
      test('Then return an array of 3 pokemons', () => {
        expect(pokemons.result.length).toBe(3);
      });
      test('Then the count is 3', () => {
        expect(pokemons.count).toBe(3);
      });
      test('Then next will contain limit=3', () => {
        expect(pokemons.next).toContain('limit=3');
      });
      test('Then previous will contain limit=3', () => {
        expect(pokemons.previous).toContain('limit=3');
      });
    });
  });
});

describe('given a function getPokemon', () => {
  describe('when is invoked argument that contains pokemon/ditto', () => {
    test('then returns an object containing name: ditto', async () => {
      global.fetch = jest.fn().mockReturnValueOnce(Promise.resolve({
        json: jest.fn().mockReturnValueOnce(Promise.resolve(
          {
            name: 'ditto',
          },
        )),
      }));
      const pokemon = await getPokemon();
      expect(pokemon).toEqual({ name: 'ditto' });
    });
  });
});
