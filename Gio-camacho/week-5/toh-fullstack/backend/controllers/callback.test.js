/**
 * GIVEN
 * WHEN
 * AND
 * OR
 * THEN...
 */
// const callback = require('./callback');
const { getAllHeroes } = require('./callback');

jest.mock('../models/heroModel');

describe('controller function', () => {
  describe('Given a getAllHeroes function', () => {
    describe('When is invoked', () => {
      let req;
      let res;
      beforeEach(async () => {
        // arrange
        req = {
          query: null
        };

        res = {
          json: jest.fn()
        };

        // act
        await getAllHeroes(req, res);
      });

      // assert
      test.only('Then call res.json once', () => {
        expect(res.json).toHaveBeenCalled();
      });
    });
  });
});
