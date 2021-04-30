const { getPokes, getPokemon } = require('./pokemon');

describe('Given a getPokes', () => {
  describe('When is invoked', () => {
    describe('And limit is 3', () => {
      let pokemon;

      beforeEach(async () => {
        global.fetch = jest.fn().mockReturnValueOnce(
          Promise.resolve({
            json: jest.fn()
              .mockReturnValueOnce(Promise.resolve({
                count: 3, results: [1, 2, 3], next: 'limit=3', previous: 'limit=3',
              })),
          }),
        );
        pokemon = await getPokes();
      });
      test('then results length is 3', () => {
        expect(pokemon.results.length).toBe(3);
      });
      test('then the count is 3', () => {
        expect(pokemon.count).toBe(3);
      });
      test('then next will contain limit=3', () => {
        expect(pokemon.next).toContain('limit=3');
      });
      test('then previous will contain limit=3', () => {
        expect(pokemon.previous).toContain('limit=3');
      });
    });
  });
});

describe('Given a getPokemon function', () => {
  describe('When is invoked with argument containing pokemon/ditto', () => {
    test('Then return object containing { name: `ditto` }', async () => {
      global.fetch = jest.fn()
        .mockReturnValueOnce(
          Promise.resolve({
            json: jest.fn()
              .mockReturnValueOnce(
                Promise.resolve({
                  name: 'ditto',
                }),
              ),
          }),
        );

      const pokemon = await getPokemon();
      expect(pokemon).toEqual({ name: 'ditto' });
    });
  });
});
