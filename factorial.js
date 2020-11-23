/**
 * Write a function called factorial, which accepts a number and returns the factorial of that number.
 * A factorial is the product of an integer and all the integers below it;
 * e.g., factorial four (4!) is equal to 24, because 4 *3 * 2 * 1 equals 24.
 * factorial zero (0!) is always 1.
 * @param {*} num
 */
let factorial = (num) => {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
