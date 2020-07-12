/**
 * Write a function called Same, which accepets two arrays,
 * The function should reue, if every value in the array has its corresponding the value square in the second array.
 * The fequency most be the same.
 * Big O is O(n)
 */
let same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let FrequencyCounter1 = {};
  let FrequencyCounter2 = {};
  for (let key of arr1) {
    FrequencyCounter1[key] = (FrequencyCounter1[key] || 0) + 1;
  }
  for (let key of arr2) {
    FrequencyCounter2[key] = (FrequencyCounter2[key] || 0) + 1;
  }
  console.log("FrequencyCounter1: ", FrequencyCounter1);
  console.log("FrequencyCounter2: ", FrequencyCounter2);
  for (let key in FrequencyCounter1) {
    if (!(key ** 2 in FrequencyCounter2)) {
      return false;
    }
    if (FrequencyCounter2[key ** 2] !== FrequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};
console.log(same([1, 2, 1], [1, 4, 1]));
