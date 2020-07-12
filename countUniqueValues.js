/**
 * Write a function called countUniqueValues which accepts a sorted array,
 * and count the unique values in the array. There can be negative numbers in the array,
 * but it will always sorted.
 * countUniqueValues([1,1,1,1,1,2]) // 2 here 1 and 2 is unique value
 * countUniqueValues([1,2,3,4,7,7,12,12,13]) // 7 here 1,2,3,4,7,12, and 13 is unique value
 */

/**
 *
 * @param {*} arr
 * Time Complexity : O(n)
 * Space Complexity : O(n)
 */

let countUniqueValuesI = (arr) => {
  if (typeof arr === "undefined" || !Array.isArray(arr))
    throw new Error("Opps! Invalid Input");
  let result = {};
  for (let val of arr) {
    result[val] = ++result[val] || 1;
  }
  return Object.keys(result).length;
};
console.log("============Solution I======================");
console.log(countUniqueValuesI([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValuesI([]));
console.log(countUniqueValuesI([1, 2, 3, 4, 7, 7, 12, 12, 13]));

/**
 *
 * @param {*} arr
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 */

let countUniqueValuesII = (arr) => {
  if (typeof arr === "undefined" || !Array.isArray(arr))
    throw new Error("Opps! Invalid Input");
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};
console.log("============Solution II======================");
console.log(countUniqueValuesII([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValuesII([]));
console.log(countUniqueValuesII([1, 2, 3, 4, 7, 7, 12, 12, 13]));
