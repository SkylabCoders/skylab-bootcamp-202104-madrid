const { getAll } = require('./HeroController');

const Hero = require('../models/heroModel');

jest.mock('../models/heroModel');

describe('heroController', () => {
  describe('Given a getAll function', () => {
    describe('when is invoked', () => {
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

          Hero.find.mockRejectedValueOnce('getAll error');

          await getAll(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with getAll error', () => {
          expect(res.send).toHaveBeenCalledWith('getAll error');
        });
      });
    });
  });
  describe('Given a getById function', () => {
    describe('when is invoked', () => {
      let req;
      let res;
      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: { heroId: 'myHero' },
          };
          res = {
            json: jest.fn(),
          };
          await getAll(req, res);
        });
        test('Then call res.json', () => {
          expect(res.json).toHaveBeenCalled();
        });
        test('Then call Hero.find', () => {
          expect(Hero.find).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: null,
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };

          Hero.find.mockRejectedValueOnce('getById error');

          await getAll(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with getById error', () => {
          expect(res.send).toHaveBeenCalledWith('getById error');
        });
      });
    });
  });
  describe('Given a postHero function', () => {
    describe('when is invoked', () => {
      let req;
      let res;
      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            body: {},
          };
          res = {
            json: jest.fn(),
          };
          await getAll(req, res);
        });
        test('Then call res.json', () => {
          expect(res.json).toHaveBeenCalled();
        });
        test('Then call Hero.find', () => {
          expect(Hero.find).toHaveBeenCalled();
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

          Hero.find.mockRejectedValueOnce('postHero error');

          await getAll(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with postHero error', () => {
          expect(res.send).toHaveBeenCalledWith('postHero error');
        });
      });
    });
  });
  describe('Given a putHero function', () => {
    describe('when is invoked', () => {
      let req;
      let res;
      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: { heroId: 'myHero' },
          };
          res = {
            json: jest.fn(),
          };
          await getAll(req, res);
        });
        test('Then call res.json', () => {
          expect(res.json).toHaveBeenCalled();
        });
        test('Then call Hero.find', () => {
          expect(Hero.find).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: null,
          };
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };

          Hero.find.mockRejectedValueOnce('putHero error');

          await getAll(req, res);
        });

        test('Then call res.status with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with putHero error', () => {
          expect(res.send).toHaveBeenCalledWith('putHero error');
        });
      });
    });
  });
});
