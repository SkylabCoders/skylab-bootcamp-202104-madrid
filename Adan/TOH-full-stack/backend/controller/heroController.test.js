/*
*Given
*Then
*And
*Or
*Then...
*/
const { getAll } = require('./heroController');

jest.mock('../models/heroModel.js');

describe('heroController', () => {
  describe('Given a getAll function ', () => {
    describe('When it invoked ', () => {
      let req;
      let res;
      beforeEach(async () => {
        req = {
          query: null
        };
        res = {
          json: jest.fn()
        };
        await getAll(req, res);
      });
      test.only('Then call res.json once', () => {
        expect(res.json).toHaveBeenCalled();
      });
      test('Then call res.json once', () => {
        expect(true).toBe(false);
      });
      test('Then call Hero.find', () => {
        expect(true).toBe(false);
      });
      describe('And there is an error', () => {
        expect(true).toBe(true);
      });
    });
  });
});
