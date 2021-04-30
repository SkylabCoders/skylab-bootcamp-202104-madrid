const { getPokes, getPokemon } = require('./pokemon');

describe('Given a function getPokes', () => {
  describe('When is invoked', () => {
    describe('And ...', () => {
      let pokemons;
      beforeEach(async () => {
        global.fetch = jest.fn().mockReturnValueOnce(Promise.resolve({
          json: jest.fn().mockReturnValueOnce({
            count: 3,
            result: [1, 1, 1],
            next: 'limit=3',
            previous: 'limit=3'
          })
        }));
        pokemons = await getPokes();
      });
      test('Then should return an array of tree pokemos', () => {
        expect(pokemons.result.length).toBe(3);
      });
      test('Then count is 3', () => {
        expect(pokemons.count).toBe(3);
      });
      test('Then next will be contain limit 3', () => {
        expect(pokemons.next).toContain('limit=3');
      });
      test('Then previous will be contain limit 3', () => {
        expect(pokemons.previous).toContain('limit=3');
      });
    });
  });
});

describe('Given a getPokemon function', () =>{
  describe('When is invoked with argument containing pokemon/charizard', () => {
    test('Then return object containing name: charizard', async () => {
      global.fetch = jest.fn()
      .mockReturnValueOnce(
        Promise.resolve({ // la promesa se resuelve con un objeto con una propiedad json
          json: jest.fn()
          .mockReturnValueOnce(
            Promise.resolve(
              {
              name: 'charizard'
            })
          )
      }))

      const pokemon = await getPokemon()
      expect(pokemon).toEqual({name: "charizard"})
    })
  })
})