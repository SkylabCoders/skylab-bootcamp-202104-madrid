const PokemonDetail = require('./detail');

const detailpage = new PokemonDetail('charizard');
const pokeNameContainer = document.querySelector('.poke-name');
describe('Given a method renderDetails in a object', () => {
  describe('When its called', () => {
    test('then it should render "charizard"', () => {
      document.body.innerHTML = '<div class="pokemonDetail"></div>';

      pokeNameContainer.innerHTML = '<h1>charizard</h1>';
      detailpage.renderDetails();
      expect(pokeNameContainer.innerHTML).toBe('charizard');
    });
  });
});
// describe('Given a method paintImg', () => {
//   describe('When its called', () => {
//     test('then it should create and print and image', () => {
//       document.body.innerHTML = '<div class="pokemonDetail"></div>';
//       const [nameContainer] = document.getElementsByClassName('pokemonDetail');
//       const image = document.createElement('img');
//       const pokemonImage = { sprites: 'url' };
//       const detailpage = new PokemonDetail(pokemonImage);
//       image.src = pokemonImage.sprites;
//       detailpage.renderDetails();
//       expect(nameContainer.innerHTML).toContain(image.innerHTML);
//       expect(image.src).toContain('url');
//     });
//   });
// });
