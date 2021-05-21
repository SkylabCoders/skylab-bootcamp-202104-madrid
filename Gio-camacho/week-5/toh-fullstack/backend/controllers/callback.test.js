/**
 * GIVEN
 * WHEN
 * AND
 * OR
 * THEN...
 */
const { getAllHeroes, createHero } = require('./callback');
const Hero = require('../models/heroModel'); /** Si quiero escuchar algo de ese modulo tengo que importarlo */

jest.mock('../models/heroModel');

describe('controller function', () => {
  describe('Given a getAllHeroes function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is', () => {
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

        test('Then call Hero.find', () => {
          expect(Hero.find).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            query: null
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          Hero.find.mockRejectedValueOnce('find');

          await getAllHeroes(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with find', () => {
          expect(res.send).toHaveBeenCalledWith('find');
        });
      });
    });
  });

  describe('Given a createHero function', () => {
    describe('When is invoked', () => {
      let req;
      let res;
      let save;
      describe('And there is no error', () => {
        beforeEach(async () => {
        // arrange
          req = {
            body: null
          };

          res = {
            json: jest.fn()
          };

          save.jest.fn().mockResolveValueOnce();

          Hero.mockRejectedValueOnce({
            save
          });
          // act
          await createHero(req, res);
        });

        // assert
        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call Hero.save', () => {
          expect(save).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            body: null
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          Hero.send.mockRejectedValueOnce('error send');

          await createHero(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with find', () => {
          expect(res.send).toHaveBeenCalledWith('error send');
        });
      });
    });
  });
});
