const principal = require('./test1')

const nombre = 'pepe';

const resultSum = 10;
const input1 = 5;
const input2 = 5;

const word = 'string';

const numero = 50;
const resultado = 2500;

const cadena = 'carricoche';

test('it should return "hola que tal and the name"',()=>{
expect(principal.saludar(nombre)).toBe('hola que tal pepe')
});

test('it should return the sum of two inputs',()=>{
    expect(principal.sumar(input1, input2)).toBe(resultSum)
});

test('it should return an empty array',()=>{
    expect(principal.crearArray()).toEqual([])});

test('it should verify if an array contains the word "string"',()=>{
    expect(principal.containWord(word)).toContain(word);
});

test('it should verify if a value is multiply * 10 & * 5',()=>{
    expect(principal.multiplicar(numero, principal.tabla)).toBe(resultado)
});


////////////////////// GIVEN / WHEN / THEN

describe('Given a map function', () => {
    describe('When calling it on an object with callback double', () => {
        test('Then the result will be 4', () => {
            //arrange
            const object = {0: 2}
            function double(value) {
                return value * 2;
            }
            //act
            const result = object.map(double);
            //assert
            expect(result).toBe(4)
        })
    })
})

describe('matching countries to tipical dance', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
        return initializeDanceBD();
    }
});

test('Spain is for Pasodoble', () => {
    expect(isValidDanceForCountry('Spain', 'Pasodoble')).toBe(true);
});

test('Argentina has the Tango', () => {
    expect(isValidDanceForCountry('Argentina', 'Tango')).toBe(true);
});

test('it should return if the string passed contains the regexp "coch"', () => {
    expect(principal.reg(cadena)).toMatch(/coch/);
});