/*
*Given
*Then
*And
*Or
*Then...
*/
const { getAll, create, getById } = require('./heroController');
const Hero = require('../models/heroModel');

jest.mock('../models/heroModel.js');

describe('heroController', () => {
  describe('Given a getAll function ', () => {
    describe('When it invoked ', () => {
      let req;
      let res;
      describe('and when there is no error', () => {
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
        test('Then call Hero.find', () => {
          expect(Hero.find).toHaveBeenCalled();
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
          Hero.find.mockRejectedValueOnce('find error');
          await getAll(req, res);
        });

        test('Then call res.json once', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });
        test('Then call res.json once', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });
  describe('Given a create function ', () => {
    describe('When it invoked ', () => {
      let req;
      let res;
      describe('and when there is no error', () => {
        beforeEach(async () => {
          req = {
            query: null
          };
          res = {
            json: jest.fn()
          };
          await create(req, res);
        });
        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });
        test('Then call Hero.create', () => {
          expect(Hero.create).toHaveBeenCalled();
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
          Hero.create.mockRejectedValueOnce('create error');
          await create(req, res);
        });

        test('Then call res.status once', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });
        test('Then call res.send once', () => {
          expect(res.send).toHaveBeenCalledWith('create error');
        });
      });
    });
  });
  describe('Given a getById function ', () => {
    describe('When it invoked ', () => {
      let req;
      let res;
      describe('and when there is no error', () => {
        beforeEach(async () => {
          req = {
            params: {}
          };
          res = {
            json: jest.fn()
          };
          await getById(req, res);
        });
        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });
        test('Then call Hero.findById', () => {
          expect(Hero.findById).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: {}
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };
          Hero.findById.mockRejectedValueOnce('create error');
          await getById(req, res);
        });

        test('Then call res.status once', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });
        test('Then call res.send once', () => {
          expect(res.send).toHaveBeenCalledWith('create error');
        });
      });
    });
  });
});
