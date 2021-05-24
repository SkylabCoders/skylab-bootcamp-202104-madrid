/**
 * GIVEN
 * WHEN
 * AND
 * OR
 * THEN...
 */

const taskModel = require('../models/taskModel');
const taskController = require('./taskController');

jest.mock('../models/taskModel');

describe('taskController', () => {
  describe('Given a \'getAll\' function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no errors', () => {
        beforeEach(async () => {
          req = {
            query: null
          };

          res = {
            json: jest.fn()
          };

          await taskController.getAll(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call \'taskModel.find\'', () => {
          expect(taskModel.find).toHaveBeenCalled();
        });
      });

      describe('And there is errors', () => {
        beforeEach(async () => {
          req = {
            query: null
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          taskModel.find.mockRejectedValueOnce('find error');

          await taskController.getAll(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call \'res.send with find error\'', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });

  describe('Given a \'created\' function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no errors', () => {
        beforeEach(async () => {
          req = {
            query: null
          };

          res = {
            json: jest.fn()
          };

          await taskController.create(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call \'taskModel.create\'', () => {
          expect(taskModel.create).toHaveBeenCalled();
        });
      });

      describe('And there is errors', () => {
        beforeEach(async () => {
          req = {
            body: null
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          taskModel.create.mockRejectedValueOnce('create error');

          await taskController.create(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call \'res.send with create error\'', () => {
          expect(res.send).toHaveBeenCalledWith('create error');
        });
      });
    });
  });

  describe('Given a \'update\' function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no errors', () => {
        beforeEach(async () => {
          req = {
            body: null,
            params: { taskId: null }
          };

          res = {
            json: jest.fn()
          };

          await taskController.update(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });

        test('Then call \'taskModel.findByIdAndUpdate\'', () => {
          expect(taskModel.findByIdAndUpdate).toHaveBeenCalled();
        });
      });

      describe('And there is errors', () => {
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

          taskModel.findByIdAndUpdate.mockRejectedValueOnce('update error');

          await taskController.update(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call \'update error\'', () => {
          expect(res.send).toHaveBeenCalledWith('update error');
        });
      });
    });
  });

  describe('Given a \'deleteById\' function', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no errors', () => {
        beforeEach(async () => {
          req = {
            params: { taskId: null }
          };

          res = {
            status: jest.fn(),
            send: jest.fn()
          };

          await taskController.deleteById(req, res);
        });

        test('Then call res.send once', () => {
          expect(res.send).toHaveBeenCalled();
        });

        test('Then call res.status once', () => {
          expect(res.status).toHaveBeenCalledWith(204);
        });

        test('Then call \'taskModel.deleteByid\'', () => {
          expect(taskModel.findByIdAndDelete).toHaveBeenCalled();
        });
      });

      describe('And there is errors', () => {
        beforeEach(async () => {
          req = {
            params: { taskId: null }
          };

          res = {
            status: jest.fn(),
            send: jest.fn()
          };

          taskModel.findByIdAndDelete.mockRejectedValueOnce('findByIdAndDelete error');

          await taskController.deleteById(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call \'findByIdAndDelete error\'', () => {
          expect(res.send).toHaveBeenCalledWith('findByIdAndDelete error');
        });
      });
    });
  });
});
