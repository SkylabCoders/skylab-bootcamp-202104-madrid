const {
  getAll, create, updateById, deleteById,
} = require('./heroController');
const Hero = require('../models/heroModels');

jest.mock('../models/heroModels');

describe('heroController', () => {
  describe('Given a function "getAll" ', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            query: null,
          };

          res = {
            json: jest.fn(),
          };

          await getAll(req, res);
        });

        test('Then call "Hero.find" once', () => {
          expect(Hero.find).toHaveBeenCalled();
        });

        test('Then call "res.json" once', () => {
          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            query: null,
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };

          Hero.find.mockRejectedValueOnce('find error');

          await getAll(req, res);
        });

        test('Then call "res.status" with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call "res.send" with "find error"', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });

  describe('Given a function "create" ', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            body: null,
          };

          res = {
            json: jest.fn(),
          };

          await create(req, res);
        });

        test('Then call "Hero.create" once', () => {
          expect(Hero.create).toHaveBeenCalled();
        });

        test('Then call "res.json" once', () => {
          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            body: null,
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };

          Hero.create.mockRejectedValueOnce('create error');

          await create(req, res);
        });

        test('Then call "res.status" with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call "res.send" with "create error"', () => {
          expect(res.send).toHaveBeenCalledWith('create error');
        });
      });
    });
  });

  describe('Given a function "updateById" ', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: { heroId: null },
            body: null,
          };

          res = {
            json: jest.fn(),
          };

          await updateById(req, res);
        });

        test('Then call "Hero.findByIdAndUpdate" once', () => {
          expect(Hero.findByIdAndUpdate).toHaveBeenCalled();
        });

        test('Then call "res.json" once', () => {
          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: { heroId: null },
            body: null,
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };

          Hero.findByIdAndUpdate.mockRejectedValueOnce('update error');

          await updateById(req, res);
        });

        test('Then call "res.status" with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call "res.send" with "update error"', () => {
          expect(res.send).toHaveBeenCalledWith('update error');
        });
      });
    });
  });

  describe('Given a function "deleteById" ', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: { heroId: null },
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };

          await deleteById(req, res);
        });

        test('Then call "Hero.findByIdAndDelete" once', () => {
          expect(Hero.findByIdAndDelete).toHaveBeenCalled();
        });

        test('Then call "res.status" with 204', () => {
          expect(res.status).toHaveBeenCalledWith(204);
        });

        test('Then call "res.send" once', () => {
          expect(res.send).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: { heroId: null },
          };
          res = {
            status: jest.fn(),
            send: jest.fn(),
          };

          Hero.findByIdAndDelete.mockRejectedValueOnce('delete error');

          await deleteById(req, res);
        });

        test('Then call "res.status" with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call "res.send" with "update error"', () => {
          expect(res.send).toHaveBeenCalledWith('delete error');
        });
      });
    });
  });
});
