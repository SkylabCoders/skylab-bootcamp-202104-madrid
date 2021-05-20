const { test, expect } = require('@jest/globals');
const principal = require('./find')
const myArr = [12, 8, 130, 44];
const resultado = 130;
const checkFunct = (x) => {
    return x > 20;
}

test('It should return the first truthy element of an array', () => {
    expect(principal.findear(myArr, checkFunct)).toBe(resultado)
})