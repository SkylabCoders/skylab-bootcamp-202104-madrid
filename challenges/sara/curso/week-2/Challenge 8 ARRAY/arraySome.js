let myArr = [1, 2, 3, 4, 5];

function comprobar(x) {
  return x % 2 === 0;
}

function comprobarLength(arr) {
  let theLength = 0;
  for (let element of arr) {
    theLength++;
  }
  return theLength;
}

function someSome(arr, callBack) {
  let theLength = comprobarLength(arr);
  let hayTrue = falso;
  for (let i = 0; i < theLength; i++) {
    let boolean = callBack(arr[i]);
    if (boolean) {
      hayTrue = true;
      break;
    }
  }
  if (hayTrue) {
    return true;
  } else {
    return false;
  }
}

let found = findear(myArr, comprobar);
