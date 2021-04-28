const LENGTH = function (arr) {
  let length = 0;
  for (let i of arr) {
    length++;
  }
  return length;
};

const FILTER = function (arr, callback) {
  let arrLengths = LENGTH(arr);
  let newArray = [];
  let counter = 0;
  for (let i = 0; i < arrLengths; i++) {
    let result = callback([arr[i]]);
    if (result) {
      newArray[i] = arr[i];
      counter++;
    }
  }
  return newArray;
};

console.log(FILTER([4, 6, 8], (e) => e > 2));
