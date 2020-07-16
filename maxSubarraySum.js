/**
 * Given an array of integers and a number, write a function called maxSubarraySum,
 * which finds the maximum sum of a subarray with the length of the number passed to the function.
 */

let maxSubarraySum = (arr, num) => {
  if (arr.length < num) return null;
  let max = 0;
  let tempMax = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  tempMax = max;
  for (let i = num; i < arr.length; i++) {
    tempMax = tempMax - arr[i - num] + arr[i];
    max = Math.max(max, tempMax);
  }
  return max;
};
console.log(maxSubarraySum([100, 200, 300, 400], 2));
