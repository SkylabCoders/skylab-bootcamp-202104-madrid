const LENGTH = function (arr) {
  let length = 0;
  for (let i of arr) {
    length++;
  }
  return length;
};

const SOME = function (arr, callback) {
  let arrLengths = LENGTH(arr);

  for (let i = 0; i < arrLengths; i++) {
    let result = callback([arr[i]]);
    if (result) {
      return true;
    }
  }
  return false;
};

console.log(SOME([4, 6, 8], (e) => e < 2));
