const Services = require('./services');

describe('Given an new Object', () => {
  describe('When the new Object call the getPokemon method', () => {
    test('Then it should return an object', async () => {
      global.fetch = jest.fn().mockReturnValueOnce(
        Promise.resolve({
          json: jest.fn().mockReturnValueOnce(
            Promise.resolve({
              name: 'ditto'
            })
          )
        })
      );
      const service = new Services();
      const pokemon = await service.getPokemon('ditto');
      expect(pokemon).toEqual({ name: 'ditto' });
    });
  });
});
