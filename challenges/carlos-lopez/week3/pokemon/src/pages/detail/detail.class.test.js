const Pokemones = require('./detail.class');
const detailClass = require('./detail.class');

describe('DetailPage class', () => {
//   let newInstance;
//   beforeEach(() => {
//     newInstance = new Pokemones();
//   });
  describe('When is invoked', () => {
    test('Then return an object', () => {
      const newInstance = new Pokemones();
      expect(newInstance).toEqual({ pokemon: undefined });
    });
  });
  describe('When is invoked with an argument `ditto`', () => {
    test('Then return an object', () => {
      const newInstance = new Pokemones('ditto');
      expect(newInstance).toEqual({ pokemon: 'ditto' });
    });
  });
});
