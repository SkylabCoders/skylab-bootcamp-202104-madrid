const DetailPage = require('./detail.class');

describe('DetailPage class', () => {
  let page;
  describe('When is invoked without argument', () => {
    beforeEach(() => {
      page = new DetailPage();
    });

    test('Then return an object ', () => {
      expect(page).toEqual({ pokemon: undefined });
    });

    test('should call drawName and behave', () => {
      expect(page.drawName().textContent).toBe('<no name>');
    });
  });

  describe('When is invoked with argument', () => {
    beforeEach(() => {
      page = new DetailPage({ name: 'bulbasur' });
    });

    test('Then return an object ', () => {
      expect(page).toEqual({ pokemon: undefined });
    });

    test('should call drawName and behave', () => {
      expect(page.drawName().textContent).toBe('bulbasur');
    });
  });
});
