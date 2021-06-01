import { getRandomArbitrary, getFourRandomValues } from './utils';

describe('Given a function getRandomArbitrary', () => {
  describe('When is invoked', () => {
    test('Then it should be a random number', () => {
      const randomNumber = getRandomArbitrary(0, 10);
      expect(randomNumber).not.toBe(11);
    });
  });
});

describe('Given a function getFourRandomValues', () => {
  describe('When is invoked', () => {
    test('Then it should return');
  });
});
