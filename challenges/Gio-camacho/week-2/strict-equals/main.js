//We cannot use (loose equals,strict equals), we must use Object.is()
const STRICT_EQUALITY = function (a, b) {
  let result;

  if (Object.is(a, b)) {
    result = true;
  } else {
    result = false;
  }

  if (Object.is(a, NaN)) {
    result = Number.isNaN(Object.is(a, b));
  }

  if (Object.is(b, -0)) {
    b = 0;
    result = Object.is(a, b);
  } else if (Object.is(a, -0)) {
    a = 0;
    result = Object.is(a, b);
  }

  return result;
};

console.log(STRICT_EQUALITY(1, 1)); // true
console.log(STRICT_EQUALITY(NaN, NaN)); // false
console.log(STRICT_EQUALITY(0, -0)); // true
console.log(STRICT_EQUALITY(-0, 0)); // true
console.log(STRICT_EQUALITY(1, "1")); // false
console.log(STRICT_EQUALITY(true, false)); // false
console.log(STRICT_EQUALITY(false, false)); // true
console.log(STRICT_EQUALITY("Water", "oil")); // false
