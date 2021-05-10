const { getPokemon, getPokemonInfo } = require('./pokemon');

describe('Given a getPokemon function', () => {
  describe('When is invoked and limit is 3', () => {
    let pokemons;

    beforeEach(async () => {
      global.fetch = jest.fn().mockReturnValueOnce(Promise.resolve({
        json: jest.fn().mockReturnValueOnce({
          count: 3, results: [1, 2, 3], next: 'limit=3', previous: 'limit=3',
        }),
      }));
      pokemons = await getPokemon();
    });
    test('Then results length is 3', () => {
      expect(pokemons.results.length).toBe(3);
    });
    test('Then count is 3', () => {
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

describe('Given a getPokemonInfo function', () => {
  describe('When is invoked with an argument which contains pokemon/dragonite', () => {
    test('Then return {name: dragonite}', async () => {
      global.fetch = jest.fn()
        .mockReturnValueOnce(
          Promise.resolve({
            json: jest.fn()
              .mockReturnValueOnce(
                Promise.resolve(
                  {
                    name: 'dragonite',
                  },
                ),
              ),
          }),
        );

      const pokemon = await getPokemonInfo();
      expect(pokemon).toEqual({ name: 'dragonite' });
    });
  });
});

describe('Given a pagination function', () => {
  describe('When is invoked', () => {
    test('Then return a new url', () => {
      expect();
    });
  });
});
