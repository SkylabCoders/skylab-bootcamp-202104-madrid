const principal = require('./test2')

let numero1 = 5;
let numero2 = 5;
let resultado = 10;

persona = {
    nombre: 'Spiderman',
    edad: 35
}

describe('Given a function, when receive 2 values, then the result is the sum of both', () => {
    //
    beforeAll(() => {
        console.log(resultado + 20);
    })

    test('the function should return 10', () => {
        expect(principal.sumar(numero1,numero2)).toBe(resultado);
    });
});

describe('Given a function, when receive an object with 2 properties, then give a greeting', () => {
 
    beforeAll(() => {
        console.log(`Hola ${persona.nombre = 'Batman'}!`);
    })

    beforeEach(() => {
        console.log(`Hola ${persona.nombre = 'Spiderman'}!`);
    })

    test('the function should return "Hola Spiderman!', () => {
        expect(principal.saludar(persona)).toBe('Hola Spiderman!');
    })

}
);

test('it should return a number not equal to zero', () => {
    const num1 = 10;
    const num2 = 5;
    expect(principal.restar(num1, num2)).not.toBe(0)
});


test('it should return a number not equal to zero',()=>{
    const num1 = 10;
    const num2 = 1;
    expect(list.minus(num1,num2)).not.toBe(0);
});