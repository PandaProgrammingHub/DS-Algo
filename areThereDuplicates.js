/**
 * Implement a function called areThereDuplicates which accepts a variable number of arguments and
 * checks whether there are any duplicates among the arguments passed in
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

/**
 * Solution :- Frequency Counter
 * @param  {...any} arg
 * Time Complexcity : 0(n)
 * Space Complexcity : 0(n)
 */
let areThereDuplicates = (...arg) => {
  if (typeof arg === "undefined" || arg.length === 0)
    throw new Error("Opps! Invalid Input");
  let frequencyCounter = {};
  for (let val of arg) {
    frequencyCounter[val] = ++frequencyCounter[val] || 1;
  }
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  return false;
};
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates("a", "b", "c", "a")); //true
