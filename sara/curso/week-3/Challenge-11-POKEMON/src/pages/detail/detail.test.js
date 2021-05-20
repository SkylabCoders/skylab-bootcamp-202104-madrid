const DetailPage = require('./detail');

describe('Given a method paintName in a object', () => {
  describe('When its called', () => {
    test('then it should print "<span>ditto</span>"', () => {
      document.body.innerHTML = '<div class="pokemonDetail"></div>';
      const [nameContainer] = document.getElementsByClassName('pokemonDetail');
      const span = document.createElement('span');
      const detailpage = new DetailPage("{ name: 'ditto' }");
      nameContainer.appendChild(span);
      detailpage.paintName();
      expect(nameContainer.innerHTML).toContain(span.innerHTML);
    });
  });
});
describe('Given a method paintImg', () => {
  describe('When its called', () => {
    test('then it should create and print and image', () => {
      document.body.innerHTML = '<div class="pokemonDetail"></div>';
      const [nameContainer] = document.getElementsByClassName('pokemonDetail');
      const image = document.createElement('img');
      const pokemonImage = { sprites: 'url' };
      const detailpage = new DetailPage(pokemonImage);
      image.src = pokemonImage.sprites;
      detailpage.paintImg();
      expect(nameContainer.innerHTML).toContain(image.innerHTML);
      expect(image.src).toContain('url');
    });
  });
});
