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

        test('Then call \'find error\'', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });
});
