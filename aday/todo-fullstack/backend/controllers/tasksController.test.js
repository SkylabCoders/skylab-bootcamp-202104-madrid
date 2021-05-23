const taskController = require('./tasksController');
const Task = require('../models/tasksModels');

jest.mock = require('../models/tasksModels');

jest.setTimeout(30000);

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
          status: jest.fn(),
          send: jest.fn(),
        };
        await taskController.getAll(req, res);
      });

      test('Then call res.json once', () => {
        expect(res.json).toHaveBeenCalled();
      });

      test('Then call Task.find', () => {
        expect(Task.find).toHaveBeenCalled();
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

          Task.find.mockRejectedValueOnce('find error');

          await taskController.getAll(req, res);
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
});
