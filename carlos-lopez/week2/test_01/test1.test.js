const principal = require('./test1');
const nombre = 'pepe';
const resultSum = 10
const input1 = 5;
const input2 = 5;
const word = 'string';
test('it should return "hola que tal nombre"', () => {
    expect(principal.main(nombre)).toBe('hola que tal pepe')
})

test('it should return the sum of two inputs', ()=>{
    expect(principal.sumar(input1, input2)).toBe(resultSum);
})

test('it should return an empty array', () => {
    expect(principal.crearArray()).toEqual([])
})

test('it should verify if an array contains the word "string"', () => {
    expect(principal.containsWord(word)).toContain(word)
})