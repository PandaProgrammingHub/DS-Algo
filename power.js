/**
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents
 */

let power = (base, exponent) => {
  if (exponent < 0) throw new Error("Oops! Invalid Input");
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
};
console.log(power(2, 0)); // 0
console.log(power(2, 1)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 3)); // 8
console.log(power(2, 4)); // 16
console.log(power(2, 5)); // 32
