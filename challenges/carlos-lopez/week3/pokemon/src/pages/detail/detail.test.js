const PokemonDetail = require('./detail');
const { getPokemon } = require('../../services/pokemon');

const newLocal = 'squirtle';
let pokemon = new PokemonDetail(newLocal);

describe('Given an instance of PokemonDetail', () => {
  describe('When it is declared with squirtle as an argument', () => {
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
