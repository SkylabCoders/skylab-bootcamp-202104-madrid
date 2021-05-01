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
                previous: null,
                result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
              })
            )
          })
        );

        const allServices = new Services();
        allPokemons = await allServices.getAllPokemons(null, 10, 0);
      });

      test('Then should return ...', () => {
        expect(allPokemons.count).toBe(1118);
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
