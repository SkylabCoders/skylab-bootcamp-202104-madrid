/**
 * GIVEN
 * THEN
 * AND
 * OR
 * THEN...
 * */

const heroController = require('./heroesControllers');

jest.mock('../models/heroModel');

describe('heroController', () => {
  describe('Given a getAll function', () => {
    describe('When is invoked', () => {
      let req;
      let res;
      beforeEach(async () => {
        req = {
          query: null,
        };
        res = {
          json: jest.fn(),
        };
        await heroController.getAllHeroes(req, res);
      });
      test.only('Then call resjson once', () => {
        expect(res.json).toHaveBeenCalled();
      });
    });
  });
});

describe('heroController', () => {
  test('should work', () => {
    expect(true).toBe(true);
  });
});
