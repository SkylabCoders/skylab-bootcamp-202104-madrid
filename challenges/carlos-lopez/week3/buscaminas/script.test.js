 const { test, expect } = require("@jest/globals");
 const { describe } = require("yargs");
 const bombsEasy = require('./script');

 test('shuffle an array', () => {
     expect(bombsEasy)
});

bombsEasy();

  describe("Given an array", () => {
    describe("when use method sort", () => {
        test("the result will be an array with different order", () => {
        //arrange
        const randomOrderedArr = [0, 1];
        let level = 'easy';
        //act
        randomOrderedArr.sort(() => Math.random() - 0.5);
        //assert
        expect(randomOrderedArr).toEqual([1, 0]);
      });
   });
  });  
  

