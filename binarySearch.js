/**
 *
 */

let binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] != elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    if (elem > arr[middle]) start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
};
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1;
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2;
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4;
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1;
