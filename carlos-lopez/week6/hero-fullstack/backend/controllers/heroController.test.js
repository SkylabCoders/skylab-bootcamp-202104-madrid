/**
 * GIVEN
 * THEN
 * AND
 * OR
 * THEN...
 */
const { getAll } = require('./heroController');
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
        await getAll(req, res);
      });
      test('Then call res.json once', () => {
        expect(res.json).toHaveBeenCalled();
      });
      test.only('then call Hero.find', () => {
        expect(Hero.find).toHaveBeenCalled();
      });
      test('Then call Hero.find', () => {
        expect(true).toBe(false);
      });
      describe('And there is an error', () => {
        test('Then call res.status with 500', () => {
          expect(true).toBe(false);
        });
      });
    });
  });
});
