const taskController = require('./tasksController');
const Task = require('../models/tasksModels');

jest.mock('../models/tasksModels');

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
          status: jest.fn(),
          send: jest.fn(),
        };
        await taskController.create(req, res);
      });

      test('Then call res.json once', () => {
        expect(res.json).toHaveBeenCalled();
      });

      test('Then call Task.create', () => {
        expect(Task.create).toHaveBeenCalled();
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

          Task.create.mockRejectedValueOnce('find error');

          await taskController.create(req, res);
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

describe('Given a getById function', () => {
  describe('When is invoked', () => {
    let req;
    let res;

    describe('And there is no error', () => {
      beforeEach(async () => {
        req = {
          params: {
            taskId: null,
          },
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn(),
        };
        await taskController.getById(req, res);
      });

      test('Then call res.json once', () => {
        expect(res.json).toHaveBeenCalled();
      });

      test('Then call Task.findById', () => {
        expect(Task.findById).toHaveBeenCalled();
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: {
              taskId: null,
            },
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };

          Task.findById.mockRejectedValueOnce('find error');

          await taskController.getById(req, res);
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

describe('Given a update function', () => {
  describe('When is invoked', () => {
    let req;
    let res;

    describe('And there is no error', () => {
      beforeEach(async () => {
        req = {
          params: {
            taskId: null,
          },
          body: null,
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn(),
        };
        await taskController.update(req, res);
      });

      test('Then call res.json once', () => {
        expect(res.json).toHaveBeenCalled();
      });

      test('Then call Task.findByIdAndUpdate', () => {
        expect(Task.findByIdAndUpdate).toHaveBeenCalled();
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: {
              taskId: null,
            },
            body: null,
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };

          Task.findByIdAndUpdate.mockRejectedValueOnce('find error');

          await taskController.update(req, res);
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

describe('Given a deleteTask function', () => {
  describe('When is invoked', () => {
    let req;
    let res;

    describe('And there is no error', () => {
      beforeEach(async () => {
        req = {
          params: {
            taskId: null,
          },
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn(),
        };
        await taskController.deleteTask(req, res);
      });

      test('Then call res.send once', () => {
        expect(res.send).toHaveBeenCalled();
      });

      test('Then call res.status with 204', () => {
        expect(res.status).toHaveBeenCalledWith(204);
      });

      test('Then call Task.findByIdAndDelete', () => {
        expect(Task.findByIdAndDelete).toHaveBeenCalled();
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: {
              taskId: null,
            },
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };

          Task.findByIdAndDelete.mockRejectedValueOnce('find error');

          await taskController.deleteTask(req, res);
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
