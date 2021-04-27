const LENGTH = function (arr) {
  let length = 0;
  for (let i of arr) {
    length++;
  }
  return length;
};

const FIND = function (arr, callback) {
  let arrLengths = LENGTH(arr);
  let newArray = [];
  for (let i = 0; i < arrLengths; i++) {
    let result = callback(arr[i]);
    if (result) {
      // return arr[i];
      newArray[i] = arr[i];
    }
  }
  return newArray;
};

console.log(FIND([4, 6, 8], (e) => e > 2));
