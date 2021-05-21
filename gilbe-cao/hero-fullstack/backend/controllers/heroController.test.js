const {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
} = require('./heroController');
const Hero = require('../models/heroModel');

jest.mock('../models/heroModel');

describe('heroController', () => {
  describe('Given a getAll function', () => {
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

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with \'find error\'', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });

  describe('Given a create function', () => {
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

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call Hero.create', () => {
          expect(Hero.create).toHaveBeenCalledWith({});
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

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with \'create error\'', () => {
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
            params: { heroId: 'myHerId123' },
          };
          res = {
            json: jest.fn(),
          };

          await getById(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call Hero.findById', () => {
          expect(Hero.findById).toHaveBeenCalledWith('myHerId123');
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: { heroId: 'myHerId123' },
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };

          Hero.findById.mockRejectedValueOnce('findById error');

          await getById(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with \'findById error\'', () => {
          expect(res.send).toHaveBeenCalledWith('findById error');
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
            params: { heroId: 'myHerId123' },
            body: null,
          };
          res = {
            json: jest.fn(),
          };

          await updateById(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call Hero.findByIdAndUpdate', () => {
          expect(Hero.findByIdAndUpdate).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: { heroId: 'myHerId123' },
            body: null,
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };

          Hero.findByIdAndUpdate.mockRejectedValueOnce('findByIdAndUpdate error');

          await updateById(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with \'findByIdAndUpdate error\'', () => {
          expect(res.send).toHaveBeenCalledWith('findByIdAndUpdate error');
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
            params: { heroId: 'myHerId123' },
          };
          res = {
            status: jest.fn(),
            json: jest.fn(),
          };

          await deleteById(req, res);
        });

        test('Then call res.status once', () => {
          expect(res.status).toHaveBeenCalled();
        });

        test('Then call res.status with 204', () => {
          expect(res.status).toHaveBeenCalledWith(204);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call Hero.findByIdAndDelete', () => {
          expect(Hero.findByIdAndDelete).toHaveBeenCalledWith('myHerId123');
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: { heroId: 'myHerId123' },
          };
          res = {
            status: jest.fn(),
            json: jest.fn(),
            send: jest.fn(),
          };

          Hero.findByIdAndDelete.mockRejectedValueOnce('findByIdAndDelete error');

          await deleteById(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with \'findByIdAndDelete error\'', () => {
          expect(res.send).toHaveBeenCalledWith('findByIdAndDelete error');
        });
      });
    });
  });
});
