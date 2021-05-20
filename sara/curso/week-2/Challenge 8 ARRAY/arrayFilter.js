let myArr = ["hola", "adios", "hi", "by"];

function comprobarLength(arr) {
  let theLength = 0;
  for (let element of arr) {
    theLength++;
  }
  return theLength;
}

function filtear(arr, callBack) {
  let theLength = comprobarLength(arr);
  let myNewArr = [];
  let myNewArrIndex = 0;
  for (let i = 0; i < theLength; i++) {
    let boolean = callBack(arr[i]);
    if (boolean) {
      myNewArr[myNewArrIndex] = arr[i];
      myNewArrIndex++;
    }
  }
  return myNewArr;
}

let result = filtear(myArr, (word) => word.length > 2);
