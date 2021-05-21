/**
 * GIVEN
 * THEN
 * AND
 * OR
 * THEN...
 */
const {
  getAll, createHero, getHero, modifyHero, deleteHero,
} = require('./heroController');
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
        test('then call Hero.find', () => {
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
        test('Then call res.send with find error', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });
  describe('Given a createHero function', () => {
    describe('When is invoked', () => {
      describe('And there is no error', () => {
        let req;
        let res;
        beforeEach(async () => {
          req = {
            body: null,
          };
          res = {
            json: jest.fn(),
          };
          await createHero(req, res);
        });
        test('then res.json have been call', () => {
          expect(res.json).toHaveBeenCalled();
        });
        test('Then call Hero.create', () => {
          expect(Hero.create).toHaveBeenCalled();
        });
      });
    });
  });
  describe('Given a getHero function', () => {
    describe('When is invoked ()', () => {
      describe('And there is no error', () => {
        let req;
        let res;
        beforeEach(async () => {
          req = {
            params: { heroId: 'jojojo' },
          };
          res = {
            json: jest.fn(),
          };
          await getHero(req, res);
        });
        test('Then the res.json should be called', () => {
          expect(res.json).toHaveBeenCalled();
        });
      });
    });
  });
  describe('Given a modifyHero function', () => {
    describe('When is invoked', () => {
      describe('And there is no error', () => {
        let req;
        let res;
        beforeEach(async () => {
          req = {
            params: { heroId: 'jojojo' },
            body: null,
          };
          res = {
            json: jest.fn(),
          };
          await modifyHero(req, res);
        });
        test('Then the res.json should be called', () => {
          expect(res.json).toHaveBeenCalled();
        });
        test('Then call Hero.findByIdAndUpdate', () => {
          expect(Hero.findByIdAndUpdate).toHaveBeenCalled();
        });
      });
    });
  });
  describe('Given a deleteHero function', () => {
    describe('When it is called', () => {
      describe('And there is no error', () => {
        let req;
        let res;
        beforeEach(async () => {
          req = {
            params: { heroId: 'jojojo' },
          };
          res = {
            status: jest.fn(),
            json: jest.fn(),
          };
          await deleteHero(req, res);
        });
        test('Then res.json should be called', () => {
          expect(res.json).toHaveBeenCalled();
        });
      });
    });
  });
});
