const Heros = require('../models/heroModel');
const {
  getAllHeroes, createHero, getById, updateById, deleteById
} = require('./heroController');

jest.mock('../models/heroModel');

describe('heroController', () => {
  describe('Given a getAllHeroes function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            query: null
          };
          res = {
            json: jest.fn()
          };

          await getAllHeroes(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call Heros.find', () => {
          expect(Heros.find).toHaveBeenCalled();
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

          Heros.find.mockRejectedValueOnce('find error');

          await getAllHeroes(req, res);
        });

        test('Then call  res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with find error', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });

  describe('Given a createHero function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            body: null
          };
          res = {
            json: jest.fn()
          };

          await createHero(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call Heros.create', () => {
          expect(Heros.create).toHaveBeenCalled();
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

          Heros.create.mockRejectedValueOnce('create error');

          await createHero(req, res);
        });

        test('Then call  res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with find error', () => {
          expect(res.send).toHaveBeenCalledWith('create error');
        });
      });
    });
  });
});
