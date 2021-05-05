let myArr = [1, 2, 3, 4];

function reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

function comprobarLength(arr) {
  let theLength = 0;
  for (let element of arr) {
    theLength++;
  }
  return theLength;
}

function reducear(arr, callBack, num = undefined) {
  let theLength = comprobarLength(arr);
  let accumulator = num;
  for (let i = 0; i < theLength; i++) {
    if (accumulator === undefined && i === 0) {
      accumulator = arr[i];
    } else {
      accumulator = callBack(accumulator, arr[i]);
    }
  }
  return accumulator;
}

let prueba = reducear(myArr, reducer);
