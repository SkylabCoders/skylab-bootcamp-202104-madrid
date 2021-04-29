
//Test passed
describe('given a prinRandomNumbers()', () => {
    describe('when calling it', () => {
        test('then it should return 1', () => {
            let num1 = Math.floor(Math.random() * 11);
            expect(num1).not.toBe(12);
        })
    })
})

// Test passed

function renderNames(arr,num1){
   return arr[num1];
  }

describe('given a renderNames()', () => {
    describe('when calling it with 2 parameters (arr, 3)', () => {
        test('then it should log 4', () => {
            //arrange
            let arr = [1, 2, 3, 4];
            //act
            let result = renderNames(arr, 3);
            //assert
            expect(result).toBe(4);
        })
    })
})





// describe('Given a ', () => {
//     describe('when a ', () => {
//         test('It should return', () => {
//             document.body.innerHTML = <div class='wrapper'></div>
//             //arrange 
//             let div = document.querySelector('.wrapper');
//             let tag = 'a';
//             let parent = div;
//             let innerHTML = 'heroes';
//             let className = 'link';
//             let href = 'https://www.google.es/'
//         })
//     })
// })