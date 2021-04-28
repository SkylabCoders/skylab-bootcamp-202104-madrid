const LENGTH = function (arr) {
  let length = 0;
  for (let i of arr) {
    length++;
  }
  return length;
};

const FIND_INDEX = function (arr, callback) {
  let arrLengths = LENGTH(arr);
  for (let i = 0; i < arrLengths; i++) {
    let result = callback([arr[i]]);
    if (result) {
      return i;
    } else {
      return -1;
    }
  }
};

console.log(FIND_INDEX([5, 12, 8, 130, 44], (e) => e < 13));
