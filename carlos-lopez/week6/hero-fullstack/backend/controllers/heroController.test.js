/**
 * GIVEN
 * THEN
 * AND
 * OR
 * THEN...
 */
const { getAll } = require('./heroController');

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
      test.only('Then call res.json once', () => {
        expect(res.json).toHaveBeenCalled();
      });
      test('Then call res.json with an array of 2 objects', () => {
        expect(true).toBe(false);
      });
      test('sThen call Hero.find', () => {
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
