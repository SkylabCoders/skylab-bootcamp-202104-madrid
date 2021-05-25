const {
  getAll,
  getUserData,
  createUserCV,
  updateUserCV,
} = require('./cvController');

const User = require('../models/cvModel');

jest.mock('../models/cvModel');

describe('cvController', () => {
  describe('Given a getAll function', () => {
    describe('When is invoked', () => {
      let req;
      let res;
      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            query: {},
          };
          res = {
            json: jest.fn(),
          };
          await getAll(req, res);
        });
        test('Then call res.json', () => {
          expect(res.json).toHaveBeenCalled();
        });
        test('Then call User.find', () => {
          expect(User.find).toHaveBeenCalled();
        });
      });
      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            query: {},
          };
          res = {
            json: jest.fn(),
            send: jest.fn(),
            status: jest.fn(),
          };

          User.find.mockRejectedValueOnce('getAll error');

          await getAll(req, res);
        });
        test('Then call status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });
        test('Then call res.send with getAll error', () => {
          expect(res.send).toHaveBeenCalledWith('getAll error');
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
            params: { userId: 'myId' },
          };
          res = {
            json: jest.fn(),
          };
          await getUserData(req, res);
        });
        test('Then call res.json', () => {
          expect(res.json).toHaveBeenCalled();
        });
        test('Then call User.find', () => {
          expect(User.findById).toHaveBeenCalled();
        });
      });
      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: { userId: 'myId' },
          };
          res = {
            json: jest.fn(),
            send: jest.fn(),
            status: jest.fn(),
          };

          User.findById.mockRejectedValueOnce('getUserData error');

          await getUserData(req, res);
        });
        test('Then call status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });
        test('Then call res.send with getUserData error', () => {
          expect(res.send).toHaveBeenCalledWith('getUserData error');
        });
      });
    });
  });
});
