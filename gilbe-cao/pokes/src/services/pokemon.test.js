const { getPokes, getPokemon } = require('./pokemon');

describe('Given a getPokes function', () => {
  describe('When is invoked', () => {
    describe('And limit is 3', () => {
      let pokemons;

      beforeEach(async () => {
        global.fetch = jest.fn()
          .mockReturnValueOnce(
            Promise.resolve({
              json: jest.fn()
                .mockReturnValueOnce(
                  Promise.resolve({
                    count: 3,
                    results: [1, 2, 3],
                    next: 'limit=3',
                    previous: 'limit=3',
                  }),
                ),
            }),
          );

        pokemons = await getPokes();
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
});

describe('Given a getPokemon function', () => {
  describe('When is invoked with argument containing pokemon/ditto', () => {
    test('Then return {name: ditto}', async () => {
      global.fetch = jest.fn()
        .mockReturnValueOnce(
          Promise.resolve(
            {
              json: jest.fn()
                .mockReturnValueOnce(
                  Promise.resolve(
                    {
                      name: 'ditto',
                    },
                  ),
                ),
            },
          ),
        );
      const pokemon = await getPokemon();
      expect(pokemon).toEqual({ name: 'ditto' });
    });
  });
});
