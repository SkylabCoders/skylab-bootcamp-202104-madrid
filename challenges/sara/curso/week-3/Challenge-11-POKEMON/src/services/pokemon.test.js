const PokemonDetail = require('../pages/detail/detail');
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
describe('Given an instance of PokemonDetail', () => {
  describe('When it is declared with squirtle as an argument', () => {
    const newLocal = 'squirtle';
    let pokemon = new PokemonDetail(newLocal);
    beforeEach(async () => {
      global.fetch = jest.fn().mockReturnValueOnce(
        Promise.resolve({
          json: jest.fn()
            .mockReturnValueOnce(Promise.resolve({
              id: 7, height: 5, weight: 90, pokemon: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
            })),
        }),
      );
      pokemon = await getPokemon();
    });
    test('Then the object has contain a propertie {pokemon: `squirtle`}', () => {
      expect(pokemon.pokemon).toBe('squirtle');
    });
    test('Then the id is 7', () => {
      expect(pokemon.id).toBe(7);
    });
    test('Then the height is 5', () => {
      expect(pokemon.height).toBe(5);
    });
    test('Then the weight is 90', () => {
      expect(pokemon.weight).toBe(90);
    });
    test('Then the img is an URL', () => {
      expect(pokemon.img).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png');
    });
  });
});
