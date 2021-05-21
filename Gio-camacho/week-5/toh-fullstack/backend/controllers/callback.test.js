/**
 * GIVEN
 * WHEN
 * AND
 * OR
 * THEN...
 */
// const callback = require('./callback');
const { getAllHeroes } = require('./callback');
const Hero = require('../models/heroModel'); /** Si quiero escuchar algo de ese modulo tengo que importarlo */

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
      test('Then call res.json once', () => {
        expect(res.json).toHaveBeenCalled();
      });

      test.only('Then call Hero.find', () => {
        expect(Hero.find).toHaveBeenCalled();
      });
    });
  });
});
