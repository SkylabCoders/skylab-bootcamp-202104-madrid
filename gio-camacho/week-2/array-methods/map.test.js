const mapTest = require("./map.js");

const arr = [4, 6, 8];
const callback = function (e) {
  return e * 2;
};
const arrResult = [8, 12, 16];

test("It should return a new array", () => {
  expect(mapTest.MAP(arr, callback)).toEqual(arrResult);
});
