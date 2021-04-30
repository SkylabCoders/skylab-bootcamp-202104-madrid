
const mainjs = require('./ChallengeArrayMethods');
const arr = [1,2,3]
const arr2 = [10,2,3]
const callbackFunct2 = function(num){
    if (num <10) {
        return true;
    } else {
        return false;
    }
    }
const callbackFunct = function(num1){
    return num1 *= 2;
    }
const newArr = [2, 4, 6]
const newArr2 = [2, 3]

test('It should take an array and a callback function and return an new array with the modified values', () =>{
    expect(mainjs.mapa(arr,callbackFunct)).toEqual(newArr)
});

test('It should take an array and a callback function and return an new array with the values that match the condition', () =>{
    expect(mainjs.filter(arr2,callbackFunct2)).toEqual(newArr2)
});
