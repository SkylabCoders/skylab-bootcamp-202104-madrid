let arr = [10, 5, 7];
function mapa(array, callbackFunct) {
  let arrResult = [];
  let contador = -1;
  for (let item of array) {
    contador++;
    arrResult[contador] = callbackFunct(item);
  }
  return arrResult;
}
function multiplicar(num1) {
  return (num1 *= 2);
}
function restar(num1) {
  return (num1 -= 1);
}
/// filter

function filter(array, callbackFunct) {
  let arrResult = [];
  let indexarr = 0;
  for (let item of array) {
    if (callbackFunct(item)) {
      arrResult[indexarr] = item;
      indexarr++;
    }
  }
  return arrResult;
}
function comprobacion(num) {
  if (num < 10) {
    return true;
  } else {
    return false;
  }
}
/// find
function find(array, callbackFunct) {
  let result;
  let indexarr = 0;
  for (let item of array) {
    if (callbackFunct(item)) {
      result = item;
      break;
    }
  }
  return result;
}
function comprobando(num) {
  if (num < 10) {
    return true;
  } else {
    return false;
  }
}
/// reduce

module.exports = { mapa: mapa, filter: filter };

let myArr = [];
for (let i = 0; i < 8; i++) {
  myArr[i] = [];
  for (let j = 0; j< 10; j++) {
   myArr[i][j] = j
  }
}
