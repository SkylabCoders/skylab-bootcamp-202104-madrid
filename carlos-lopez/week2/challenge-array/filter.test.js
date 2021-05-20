const { test, expect } = require('@jest/globals');
const principal = require('./filter');
const arr = ["palabra", "roca", "sal", "extremadura"];
const newArr = ['roca', 'sal'];
const checkFunct = (x) => {
    return x.length < 5;
}
test('It should return a new array with the truthy values', () => {
    expect(principal.filtrar(arr, checkFunct)).toEqual(newArr)
})