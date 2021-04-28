

describe('given a prinRandomNumbers()', () => {
    describe('when calling it', () => {
        test('then it should return 1', () => {
            let num1 = Math.floor(Math.random() * 11);
            expect(num1).not.toBe(12);
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