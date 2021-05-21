/**
 * GIVEN
 * THEN
 * AND
 * OR
 * THEN...
 * */

const heroController = require('./heroesControllers');
const Hero = require('../models/heroModel');

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
      test('Then call resjson once', () => {
        expect(res.json).toHaveBeenCalled();
      });
      test('Then call Hero.find', () => {
        expect(Hero.find).toHaveBeenCalled();
      });
    });
  });
});

describe('heroController', () => {
  test('should work', () => {
    expect(true).toBe(true);
  });
});
