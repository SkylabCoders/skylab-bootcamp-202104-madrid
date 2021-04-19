//The calculator function has two parameters with the type any, because, we do not know the input.

const sum = (a: number, b: number): number => Math.round((a + b) * 1000) / 1000,
  subs = (a: number, b: number): number => Math.round((a - b) * 1000) / 1000,
  mult = (a: number, b: number): number => Math.round(a * b * 1000) / 1000,
  div = (a: number, b: number): number => Math.round((a / b) * 1000) / 1000,
  sqrtRoot = (a: number): number => Math.round(Math.sqrt(a) * 1000) / 1000;

const calculator = (n1: any, n2: any): string | string[] => {
  if (n2 === undefined) {
    if (typeof n1 === "number") {
      let squareRoot = sqrtRoot(n1);
      return `SquareRoot of ${n1} is ${squareRoot}`;
    } else {
      return "Error: You must introduce a number.";
    }
  } else if (typeof n1 === "number" && typeof n2 === "number") {
    const resultsSum = sum(n1, n2),
      resultsSubstraction = subs(n1, n2),
      resultsMultiplication = mult(n1, n2),
      resultsDivision = div(n1, n2);

    return [
      `The result of the ${n1} + ${n2} is ${resultsSum}`,
      `The result of the ${n1} - ${n2} is ${resultsSubstraction}`,
      `The result of the ${n1} * ${n2} is ${resultsMultiplication}`,
      `The result of the ${n1} / ${n2} is ${resultsDivision}`,
    ];
  } else {
    return "Error: You must introduce a number.";
  }
};
