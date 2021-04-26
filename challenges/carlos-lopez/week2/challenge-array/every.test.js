const principal = require('./every.js');
const myArr = [1, 2, 3, 4, 5];
const checkFunct = function(x) {
    return x < 10;
  }

test('it should return "true"', () => {
    expect(principal.everyear(myArr, checkFunct)).toBeTruthy()
});