/**
 * Write a function called sameFrequency.Given two positive integers,
 * find out if the two numbers have the same frequency of digits.
 * Time complexities : 0(N)
 * Sample Input: sameFrequency(182, 281) // true
 * Sample Input: sameFrequency(34, 14) // false
 * Sample Input: sameFrequency(3589578, 5879385) // true
 * Sample Input: sameFrequency(22, 222) // false
 */

let sameFrequency = (int1, int2) => {
  if (int1.toString().length !== int2.toString().length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of int1.toString()) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }
  for (let val of int2.toString()) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
};
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
console.log(sameFrequency(144, 441)); //true
