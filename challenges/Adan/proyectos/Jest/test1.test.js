const principal = require('./test1');
const resultSum = 10

describe('Given a function sayHi', ()=>{
    describe('When you call the function uses 1 param obj',() => {
        test('Then it should say HI using name and lastName of user', () =>{
            //arrange
            const objPersona = {
                nombre: 'jose',
                edad: 50,
                apellido: 'castillo'
            }
            //act 
         let result = principal.sayHi(objPersona)
            //assert
            expect(result).toEqual('Hi ' + objPersona.nombre)
        })
    })
});
describe('Given a function Sum', ()=>{
    describe('When u use two parameters',() => {
        test('Then it should sum both param', () => {
            //arrange
            const input1= 5
            const input2 = 5
            //act
         let result = principal.sumar(input1, input2)
            //assert
            expect(result).toBe(resultSum)
        })
    })
});
