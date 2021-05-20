const Detailpage = require('./detail-class');

describe('Given a method printName in a object', () => {
  describe('When its called', () => {
    test('then it should print "<span>ditto</span>"', () => {
      document.body.innerHTML = '<div class="pokemonDetail"></div>';
      const [nameContainer] = document.getElementsByClassName('pokemonDetail');
      const span = document.createElement('span');
      const detailpage = new Detailpage("{ name: 'ditto' }");
      nameContainer.appendChild(span);
      detailpage.DrawName();
      expect(nameContainer.innerHTML).toContain(span.innerHTML);
    });
  });
});
describe('Given a method printImage', () => {
  describe('When its called', () => {
    test('then it should create and print and image', () => {
      document.body.innerHTML = '<div class="pokemonDetail"></div>';
      const [nameContainer] = document.getElementsByClassName('pokemonDetail');
      const image = document.createElement('img');
      const pokemonImage = { sprites: 'url' };
      const detailpage = new Detailpage(pokemonImage);
      image.src = pokemonImage.sprites;
      detailpage.drawImage();
      expect(nameContainer.innerHTML).toContain(image.innerHTML);
      expect(image.src).toContain('url');
    });
  });
});
