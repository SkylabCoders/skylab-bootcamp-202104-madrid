const { getAll } = require('./HeroController');
const Hero = require('../models/heroModel');

jest.mock('../models/heroModel');

describe('heroController', () => {
  describe('Given a getAll function', () => {
    describe('when is invoked', () => {
      let req;
      let res;
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
  });
});
