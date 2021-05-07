// const main = require('./list');

// jest.mock('list');

describe('Given an listPage fn that uses a url as a param', () => {
  describe('when its invoked', () => {
    describe('then it should first consume a promise to get an array results from an API', async () => {
      let pokemons;
      let results;
      beforeEach(async () => {
        global.fetch = jest.fn().mockReturnValueOnce(Promise.resolve({
          json: jest.fn().mockReturnValueOnce(
            results = [
              { name: 'ditto', url: '"https://pokeapi.co/api/v2/pokemon-form/132/"' }
            ]
          )
        }));
        pokemons = await main.getPokes();
      });
      test('then should return a object pokemons that contains', () => {
        expect(pokemons.results).toEqual("{ name: 'ditto', url: 'https://pokeapi.co/api/v2/pokemon-form/132/'"});
      });
      test('Then should return an ')
    });
  });
});
