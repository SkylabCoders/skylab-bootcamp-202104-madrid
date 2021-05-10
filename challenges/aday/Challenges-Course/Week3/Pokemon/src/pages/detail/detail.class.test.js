const DetailPage = require('./detail.class');

describe('Given a DetailsPage Class', () => {
  const prueba = new DetailPage();
  describe('When is invoked without argument', () => {
  });
  test('Then return a object', () => {
    expect(prueba).toEqual({});
  });
});

describe('Given a draw method in a DetailsPage Class', () => {
  describe('When is invoked', () => {
    test('Then return a tag "p"', () => {
      // arrange
      document.body.innerHTML = '<div class="body__main-container"></div>';
      // act
      const container = document.querySelector('.body__main-container');
      const pagina = new DetailPage('pokemon');
      pagina.drawInfo();
      // assert
      expect(container.innerHTML).toContain('<p></p>');
    });
  });
});

describe('Given a function', () => {
  describe('When is invoked', () => {
    const mockPokemon = { name: 'squirtle', sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' } };
    test('Then return an object "img" with a src', () => {
      document.body.innerHTML = '<div class="body__main-container"></div>';
      const container = document.querySelector('.body__main-container');
      const squirtle = new DetailPage(mockPokemon);
      squirtle.drawPicture();
      expect(container.innerHTML).toContain('<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png">');
    });
  });
});
