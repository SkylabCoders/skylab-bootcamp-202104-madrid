// const { TestScheduler } = require("@jest/core")
const listJs = require('./list')

describe('Given a function createAnchor()', () => {
    describe('when calling it', () => {
        test('then the anchor will be truthy', () => {
            //Arrange
            //act
             listJs.createAnchor();
             const result = document.getElementsByTagName('a');
            //assert
            expect(result).toBeTruthy()
        })
        test('then the element div--listNames will be truthy', () => {
            //arrange
            //act
            listJs.createAnchor();
            //assert
        })
    })
})


// describe('Given a function createAnchor()', () => {
//     describe('when calling it', () => {
//         test('then the anchor will be truthy', () => {
//             //Arrange
//             //act
//              listJs.createAnchor();
//              const result = document.getElementsByTagName('a');
//             //assert
//             expect(result).toBeTruthy()
//         })
//     })
// })
 