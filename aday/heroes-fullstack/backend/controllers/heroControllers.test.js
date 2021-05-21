/**
 * GIVEN
 * THEN
 * AND
 * OR
 * THEN...
 * */

const heroController = require('./heroesControllers');
const Hero = require('../models/heroModel');

jest.mock('../models/heroModel');

describe('heroController', () => {
  describe('Given a getAll function', () => {
    describe('When is invoked', () => {
      let req;
      let res;
      beforeEach(async () => {
        req = {
          query: null,
        };
        res = {
          json: jest.fn(),
        };
        await heroController.getAllHeroes(req, res);
      });
      test('Then call resjson once', () => {
        expect(res.json).toHaveBeenCalled();
      });
      test('Then call Hero.find', () => {
        expect(Hero.find).toHaveBeenCalled();
      });
    });
  });
});

describe('And is an error', () => {
  let req;
  let res;
  beforeEach(async () => {
    req = {
      query: null,
    };
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    Hero.find.mockRejectedValueOnce('There is an error');

    await heroController.getAllHeroes(req, res);
  });
  test('Then call res.status with 500', () => {
    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe('Given a getById function', () => {
  describe('When is invoked', () => {
    let req;
    let res;
    beforeEach(async () => {
      req = {
        params: { heroId: null },
      };
      res = {
        json: jest.fn(),
      };
      await heroController.getById(req, res);
    });
    test('Then call resjson once', () => {
      expect(res.json).toHaveBeenCalled();
    });
    test('Then call Hero.findById', () => {
      expect(Hero.findById).toHaveBeenCalled();
    });
  });
});

describe('Given a getById function', () => {
  describe('When is an error', () => {
    let req;
    let res;
    beforeEach(async () => {
      req = {
        params: { heroId: null },
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };

      Hero.findById.mockRejectedValueOnce('There is an error');
      await heroController.getById(req, res);
    });
    test('Then call res.status(500)', () => {
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a updateById function', () => {
  describe('When is invoked', () => {
    let req;
    let res;
    beforeEach(async () => {
      req = {
        params: { heroId: null },
        body: null,
      };
      res = {
        json: jest.fn(),
      };

      await heroController.updateById(req, res);
    });
    test('Then call resjson once', () => {
      expect(res.json).toHaveBeenCalled();
    });
    test('Then call Hero.findById', () => {
      expect(Hero.findById).toHaveBeenCalled();
    });
  });
});

describe('Given a updateById function', () => {
  describe('When is an error', () => {
    let req;
    let res;
    beforeEach(async () => {
      req = {
        params: { heroId: null },
        body: null,
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      Hero.findByIdAndUpdate.mockRejectedValueOnce('There is an error');
      await heroController.updateById(req, res);
    });
    test('Then call res.status(500)', () => {
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
