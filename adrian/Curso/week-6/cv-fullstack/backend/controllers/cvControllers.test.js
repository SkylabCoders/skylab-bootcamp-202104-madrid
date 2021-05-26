const {
  getAll,
  createCv,
  getUserData,
  updateCv
} = require('./cvControllers');

const User = require('../models/cvModels');

jest.mock('../models/cvModels');

describe('cvController', () => {
  describe('Given a getAll function', () => {
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

          await getAll(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call User.find', () => {
          expect(User.find).toHaveBeenCalled();
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

          User.find.mockRejectedValueOnce('getAll error');

          await getAll(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with \'getAll error\'', () => {
          expect(res.send).toHaveBeenCalledWith('getAll error');
        });
      });
    });
  });
  describe('Given a createCv function', () => {
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

          await createCv(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call User.create', () => {
          expect(User.create).toHaveBeenCalled();
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

          User.create.mockRejectedValueOnce('create error');

          await createCv(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with \'createCv error\'', () => {
          expect(res.send).toHaveBeenCalledWith('create error');
        });
      });
    });
  });
  describe('Given a getUserData function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: { userId: 'cygkfdyc' }
          };
          res = {
            json: jest.fn()
          };

          await getUserData(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call User.findById', () => {
          expect(User.findById).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: { userId: 'cbds' }
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          User.findById.mockRejectedValueOnce('find error');

          await getUserData(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with \'getUserData error\'', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });
  describe('Given a updateCv function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: { userId: 'cygkfdyc' }
          };
          res = {
            json: jest.fn()
          };

          await updateCv(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call User.findById', () => {
          expect(User.findByIdAndUpdate).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: { userId: 'cbds' }
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          User.findByIdAndUpdate.mockRejectedValueOnce('update error');

          await updateCv(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with \'update error\'', () => {
          expect(res.send).toHaveBeenCalledWith('update error');
        });
      });
    });
  });
});
