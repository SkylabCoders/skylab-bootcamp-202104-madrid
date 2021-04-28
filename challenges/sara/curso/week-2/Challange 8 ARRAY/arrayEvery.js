let myArr = [1, 30, 39, 29, 10, 13];

function comprobar(x) {
  return x < 40;
}

function comprobarLength(arr) {
  let theLength = 0;
  for (let element of arr) {
    theLength++;
  }
  return theLength;
}

function everyrear(arr, callBack) {
  let theLength = comprobarLength(arr);
  let hayFalse = false;
  for (let i = 0; i < theLength; i++) {
    let boolean = callBack(arr[i]);
    if (boolean === false) {
      hayFalse = true;
      break;
    }
  }
  if (hayFalse) {
    return false;
  } else {
    return true;
  }
}

let found = findear(myArr, comprobar);
