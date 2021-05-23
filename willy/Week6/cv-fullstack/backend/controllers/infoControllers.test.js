const {
  getAll, create, deleteById, updateById
} = require('./infoControllers');
const Info = require('../model/infoModel');

jest.mock('../model/infoModel');

describe('controllerInfo', () => {
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

        test('Then call Info.find once', () => {
          expect(Info.find).toHaveBeenCalled();
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        describe('And there is error', () => {
          beforeEach(async () => {
            req = {
              query: null
            };

            res = {
              json: jest.fn(),
              status: jest.fn(),
              send: jest.fn()
            };

            Info.find.mockRejectedValueOnce('find error');

            await getAll(req, res);
          });
          test('Then call res.status with 500', () => {
            expect(res.status).toHaveBeenCalledWith(500);
          });

          test('Then call res.send with "find error"', () => {
            expect(res.send).toHaveBeenCalledWith('find error');
          });
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
            body: null
          };
          res = {
            json: jest.fn()
          };

          await create(req, res);
        });
        test('Then call Info.create', () => {
          expect(Info.create).toHaveBeenCalled();
        });
        test('Then call res.json', () => {
          expect(res.json).toHaveBeenCalled();
        });

        describe('And there is error', () => {
          beforeEach(async () => {
            req = {
              body: null
            };
            res = {
              json: jest.fn(),
              status: jest.fn(),
              send: jest.fn()
            };

            Info.create.mockRejectedValueOnce('create error');

            await create(req, res);
          });
          test('Then call res.status with 500', () => {
            expect(res.status).toHaveBeenCalledWith(500);
          });
          test('Then call res.send with "create error"', () => {
            expect(res.send).toHaveBeenCalledWith('create error');
          });
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
            body: null,
            params: { infoId: null }
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          await updateById(req, res);
        });
        test('Then call Info.findByIdAndUpdate', () => {
          expect(Info.findByIdAndUpdate).toHaveBeenCalled();
        });
        test('Then call res.json', () => {
          expect(res.json).toHaveBeenCalled();
        });

        describe('And there is error', () => {
          beforeEach(async () => {
            req = {
              body: null,
              params: { taskId: null }
            };
            res = {
              json: jest.fn(),
              status: jest.fn(),
              send: jest.fn()
            };

            Info.findByIdAndUpdate.mockRejectedValueOnce('update error');

            await updateById(req, res);
          });
          test('Then call res.status with 500', () => {
            expect(res.status).toHaveBeenCalledWith(500);
          });
          test('Then call res.send with "update error"', () => {
            expect(res.send).toHaveBeenCalledWith('update error');
          });
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

            params: { infoId: null }
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          await deleteById(req, res);
        });
        test('Then call Info.findByIdAndDelete', () => {
          expect(Info.findByIdAndDelete).toHaveBeenCalled();
        });
        test('Then call res.status with 204', () => {
          expect(res.status).toHaveBeenCalledWith(204);
        });
        test('Then call res.send once', () => {
          expect(res.send).toHaveBeenCalled();
        });

        describe('And there is error', () => {
          beforeEach(async () => {
            req = {

              params: { infoId: null }
            };
            res = {
              json: jest.fn(),
              status: jest.fn(),
              send: jest.fn()
            };

            Info.findByIdAndDelete.mockRejectedValueOnce('delete error');

            await deleteById(req, res);
          });
          test('Then call res.status with 500', () => {
            expect(res.status).toHaveBeenCalledWith(500);
          });
          test('Then call res.send with "delete error"', () => {
            expect(res.send).toHaveBeenCalledWith('delete error');
          });
        });
      });
    });
  });
});
