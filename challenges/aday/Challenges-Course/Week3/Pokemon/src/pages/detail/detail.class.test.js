const DetailPage = require('./detail.class');

describe('Given a DetailsPage Class', () => {
  describe('When is invoked without argument', () => {
    let page;
    beforeEach(() => {
      page = new DetailPage();
    });
    test('Then return a object', () => {
      expect(page).toEqual({});
    });
    test('Then return a object', () => {
      expect(page).toEqual({});
    });
  });
});
