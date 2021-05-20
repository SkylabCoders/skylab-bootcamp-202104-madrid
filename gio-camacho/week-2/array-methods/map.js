const LENGTH = function (arr) {
  let length = 0;
  for (let i of arr) {
    length++;
  }
  return length;
};

const MAP = function (arr, callback) {
  let arrLengths = LENGTH(arr);
  let newArray = [];
  for (let i = 0; i < arrLengths; i++) {
    let result = callback([arr[i]]);
    newArray[i] = result;
  }
  return newArray;
};

module.exports = { MAP };
