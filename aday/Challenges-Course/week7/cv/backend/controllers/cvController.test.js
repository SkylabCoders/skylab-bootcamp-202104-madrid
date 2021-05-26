const cvController = require('./cvController');
const Cv = require('../models/cvModel');

jest.mock('../models/cvModel');

describe('Given a getAllCvs function', () => {
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
        await cvController.getAllCvs(req, res);
      });
      test('Then call Cv.find', () => {
        expect(Cv.find).toHaveBeenCalled();
      });
      test('Then call res.json', () => {
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
        Cv.find.mockRejectedValueOnce('error');
        await cvController.getAllCvs(req, res);
      });
      test('Then call res.status(500)', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then call res.send', () => {
        expect(res.send).toHaveBeenCalled();
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
          body: null,
        };

        res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn(),
        };
        await cvController.createCv(req, res);
      });
      test('Then call Cv.create', () => {
        expect(Cv.create).toHaveBeenCalled();
      });
      test('Then call res.json', () => {
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
        Cv.create.mockRejectedValueOnce('error');
        await cvController.createCv(req, res);
      });
      test('Then call res.status(500)', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then call res.send', () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
