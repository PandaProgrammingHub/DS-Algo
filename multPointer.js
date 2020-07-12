/**
 *  Write a function called SumZero which accept a sorted array of integers,
 *  The function should find the first pair where the sum is Zero, Return an
 *  array the includes both the values that sum to zero or undefined if a pair does not exist
 *  sumZero([-3,-2,-1,0,1,2,3]) // [-3, 3]
 *  sumZero([-4,-1,0,1,3,6]) // undefined
 */
/**
 * Solution I
 * @param {*} arr
 * Time Complexity : O(n^2)
 * Space Complexity : O(1)
 */
let sumZeroI = (arr) => {
  if (typeof arr === "undefined" || arr === "" || arr == null) return undefined;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};
console.log(sumZeroI([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroI([-4, -1, 0, 1, 3, 6]));
console.log(sumZeroI([-4, -2, 0, 1, 3, 6]));

/**
 * Solution II
 * @param {*} arr
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 */
let sumZeroII = (arr) => {
  if (typeof arr === "undefined" || arr === "" || arr == null) return undefined;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
};
console.log(sumZeroII([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroII([-4, -1, 0, 1, 3, 6]));
console.log(sumZeroII([-4, -2, 0, 1, 3, 6]));
