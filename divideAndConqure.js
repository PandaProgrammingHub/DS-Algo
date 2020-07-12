/**
 * Write a function called Search, which accepts a sorted array and a number called n,
 * retune the index of n in given sorted array, if index is not found the return -1;
 */

/**
 * Solution I
 * @param {Array} arr
 * @param {String} num
 * Time  Complexity : O(n)
 * Space Complexity : O(1)
 */
let searchI = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) return i;
  }
  return -1;
};
console.log("============Solution I======================");
console.log(searchI([1, 2, 3, 4, 5, 6], 4));
console.log(searchI([1, 2, 3, 4, 5, 6], 8));
console.log(searchI([1, 2, 3, 4, 5, 6], 6));

/**
 * Solution II
 * @param {Array} arr
 * @param {String} num
 * Time  Complexity : O(log n)
 * Space Complexity : O(1)
 */
let searchII = (arr, num) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    let currentElement = arr[middle];
    if (currentElement < num) {
      min = middle + 1;
    } else if (currentElement > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};
console.log("============Solution II======================");
console.log(searchII([1, 2, 3, 4, 5, 6], 4));
console.log(searchII([1, 2, 3, 4, 5, 6], 8));
console.log(searchII([1, 2, 3, 4, 5, 6], 6));
