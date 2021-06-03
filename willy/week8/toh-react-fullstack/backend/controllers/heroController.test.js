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

  describe('Given a getById function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: null
          };
          res = {
            json: jest.fn()
          };

          await getById(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call Heros.findById', () => {
          expect(Heros.findById).toHaveBeenCalled();
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

          Heros.findById.mockRejectedValueOnce('find by id error');

          await getById(req, res);
        });

        test('Then call  res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with find by id error', () => {
          expect(res.send).toHaveBeenCalledWith('find by id error');
        });
      });
    });
  });

  describe('Given a updateById function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: null,
            body: null
          };
          res = {
            json: jest.fn()
          };

          await updateById(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call Heros.findByIdAndUpdate', () => {
          expect(Heros.findByIdAndUpdate).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            body: null,
            params: null
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          Heros.findByIdAndUpdate.mockRejectedValueOnce('update error');

          await updateById(req, res);
        });

        test('Then call  res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with update error', () => {
          expect(res.send).toHaveBeenCalledWith('update error');
        });
      });
    });
  });

  describe('Given a deleteById function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: null

          };
          res = {
            status: jest.fn()
          };

          await deleteById(req, res);
        });

        test('Then call res.status with 204', () => {
          expect(res.status).toHaveBeenCalledWith(204);
        });

        test('Then call Heros.findByIdAndUpdate', () => {
          expect(Heros.findByIdAndDelete).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: null
          };
          res = {

            status: jest.fn(),
            send: jest.fn()
          };

          Heros.findByIdAndDelete.mockRejectedValueOnce('delete error');

          await deleteById(req, res);
        });

        test('Then call  res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with update error', () => {
          expect(res.send).toHaveBeenCalledWith('delete error');
        });
      });
    });
  });
});
