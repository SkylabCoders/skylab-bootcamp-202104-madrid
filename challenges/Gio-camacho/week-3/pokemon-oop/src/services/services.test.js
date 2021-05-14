const Services = require('./services');
const Details = require('./helper');

describe('Given a getPokemon Object Method', () => {
  describe('When the new Object call the getPokemon() method', () => {
    test('The should return an object {name: "ditto"}', async () => {
      global.fetch = jest.fn().mockReturnValueOnce(
        Promise.resolve({
          json: jest.fn().mockReturnValueOnce(
            Promise.resolve({
              name: 'ditto'
            })
          )
        })
      );

      const services = new Services();
      const pokemon = await services.getPokemon('ditto');
      expect(pokemon).toEqual({ name: 'ditto' });
    });
  });
});

describe('Given an getAllPokemons Object Method', () => {
  describe('When getAllPokemons is invoked', () => {
    describe('And passing a beforeEach', () => {
      let allPokemons;

      beforeEach(async () => {
        global.fetch = jest.fn().mockReturnValueOnce(
          Promise.resolve({
            json: jest.fn().mockReturnValueOnce(
              Promise.resolve({
                count: 1118,
                next: 'limit=10',
                previous: 'limit=10',
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
              })
            )
          })
        );

        const allServices = new Services();
        allPokemons = await allServices.getAllPokemons(null, 10, 0);
      });
      const countResult = 1118;
      test('Then should return { count: 1118 }', () => {
        expect(allPokemons.count).toBe(countResult);
      });

      const nextResult = 'limit=10';
      test('Then should return { next: "limit=10" }', () => {
        expect(allPokemons.next).toBe(nextResult);
      });

      const previousResult = 'limit=10';
      test('Then should return { previous: "limit=10" }', () => {
        expect(allPokemons.previous).toBe(previousResult);
      });

      const results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      test('Then should return { results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }', () => {
        expect(allPokemons.results).toEqual(results);
      });
    });
  });
});

describe('Given a htmlTagGenerator method', () => {
  describe('When is invoked', () => {
    test('Then should return an Html Element', () => {
      document.body.innerHTML = `
        <div id="wrapper-details"></div>
        `;

      const parent = document.getElementById('wrapper-details');
      const details = new Details('img');
      const createHtmlTag = details.htmlTagGenerator(null, 'wrapper-details__img', null, './img/picture.png');

      parent.appendChild(createHtmlTag);

      const result = '<img class="wrapper-details__img" src="./img/picture.png">';
      expect(parent.innerHTML).toContain(result);
    });
  });
});
