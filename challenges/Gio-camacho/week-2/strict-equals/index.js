//We cannot use (loose equals,strict equals,Object.is())
const STRICT_EQUALITY = function (a, b) {
  switch (a) {
    case b:
      return true;
      break;
    default:
      return false;
  }
};

console.log(STRICT_EQUALITY(1, 1)); // true
console.log(STRICT_EQUALITY(NaN, NaN)); // false
console.log(STRICT_EQUALITY(0, -0)); // true
console.log(STRICT_EQUALITY(-0, 0)); // true
console.log(STRICT_EQUALITY(1, "1")); // false
console.log(STRICT_EQUALITY(true, false)); // false
console.log(STRICT_EQUALITY(false, false)); // true
console.log(STRICT_EQUALITY("Water", "oil")); // false
