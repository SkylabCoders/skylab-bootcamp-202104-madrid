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

describe('And is an error', () => {
  let req;
  let res;
  beforeEach(async () => {
    req = {
      query: null,
    };
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    Hero.find.mockRejectedValueOnce('There is an error');

    await heroController.getAllHeroes(req, res);
  });
  test('Then call res.status with 500', () => {
    expect(res.status).toHaveBeenCalledWith(500);
  });
});
