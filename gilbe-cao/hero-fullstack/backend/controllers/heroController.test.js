const { getAll, create } = require('./heroController');
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
});
