let myArr = [5, 12, 8, 130, 44];

function comprobar(x) {
  return x > 10;
}

function comprobarLength(arr) {
  let theLength = 0;
  for (let element of arr) {
    theLength++;
  }
  return theLength;
}

function findear(arr, callBack) {
  let theLength = comprobarLength(arr);
  let result;
  for (let i = 0; i < theLength; i++) {
    let boolean = callBack(arr[i]);
    if (boolean) {
      result = arr[i];
      break;
    }
  }
  return result;
}

let found = findear(myArr, comprobar);
