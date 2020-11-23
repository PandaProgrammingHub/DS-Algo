/**
 * Write a function called collectOdds, which accepts an array and return new array of odd numbers
 */

/**
 * solution - I - Basic Recursion
 * @param {Interger} array
 */

let collectOddsI = (array) => {
  if (typeof array === "undefined" || array.length === 0)
    throw new Error("Opps! Invalid Input");
  let odds = [];
  let findOdds = (array) => {
    if (array.length === 0) return;
    if (array[0] % 2 !== 0) {
      odds.push(array[0]);
    }
    findOdds(array.slice(1));
  };
  findOdds(array);
  return odds;
};
console.log(collectOddsI([1, 2, 3, 4, 5, 6, 7, 8, 9]));
/**
 * solution - II - Pure Recursion
 * @param {Interger} array
 */

let collectOdds = (array) => {
  if (typeof array === "undefined") throw new Error("Opps! Invalid Input");
  let odds = [];
  if (array.length === 0) return odds;
  if (array[0] % 2 !== 0) {
    odds.push(array[0]);
  }
  odds = odds.concat(collectOdds(array.slice(1)));
  return odds;
};
console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
