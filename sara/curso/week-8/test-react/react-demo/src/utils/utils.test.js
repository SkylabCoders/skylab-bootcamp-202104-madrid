const { getRandomArbitrary, getFourRandomValues, nextQuiz } = require('./utils');

global.Math = {
  random: jest.fn(),
  floor: jest.fn(),
};

describe('in utils', () => {
  describe('given a getRandomArbitrary function', () => {
    describe('When calling it passing two numbers', () => {
      let min;
      let max;
      beforeEach(() => {
        min = 2;
        max = 10;
        getRandomArbitrary(max, min);
      });
      test('It should call random method', () => {
        expect(Math.random).toHaveBeenCalled();
      });
      test('It should call floor method', () => {
        expect(Math.floor).toHaveBeenCalled();
      });
    });
  });
});
