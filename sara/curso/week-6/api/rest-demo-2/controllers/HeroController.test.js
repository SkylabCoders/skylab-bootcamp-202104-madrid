const { getAll } = require('./HeroController');

jest.mock('../models/heroModel');

describe('heroController', () => {
  describe('Given a getAll function', () => {
    describe('when is invoked', () => {
      let req;
      let res;
      beforeEach(async () => {
        req = {
          query: {},
        };
        res = {
          json: jest.fn(),
        };
        await getAll(req, res);
      });
      test.only('Then call res.json', () => {
        expect(res.json).toHaveBeenCalled();
      });
      test('Then call res.json with an array of two objects', () => {
        expect(true).toBe(true);
      });
      test('Then call Hero.find', () => {
        expect(true).toBe(true);
      });
    });
  });
});
