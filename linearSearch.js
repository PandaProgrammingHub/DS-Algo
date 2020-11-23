/**
 * Write a function called linearSearch which accepts an array and a value,
 * and returns the index at which the value exists.
 * If the value does not exist in the array, return -1
 */
let linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) return i;
  }
  return -1;
};
console.log(linearSearch([], 15));
console.log(linearSearch([10, 15, 20, 25, 30], 15));
