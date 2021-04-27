const LENGTH = function (arr) {
  let length = 0;
  for (let i of arr) {
    length++;
  }
  return length;
};

const EVERY = function (arr, callback) {
  let arrLengths = LENGTH(arr);
  let result = true;

  for (let i = 0; i < arrLengths; i++) {
    if (callback(arr[i]) !== true) {
      result = false;
    }
  }

  return result;
};

console.log(EVERY([4, 6, 8], (e) => e === 2));
console.log(EVERY([2, 2, 2], (e) => e === 2));
