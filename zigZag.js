/**
 *
 * Suppose you were given an array of integers, and
 * you are told to sort the integers in a ‘zig-zag’ pattern.
 * In a zig-zag pattern, the first integer is less than the second integer,
 * which is greater than the third integer, which is less than the fourth integer,
 * and so on. Ultimately, you need to produce a collection of integers [ a, b, c, d, e ] such that a < b > c < d > e.
 *
 * @param {Array} arr
 * Time complexity : O(n)
 * Space complexity : O(n)
 */
const zicZag = (arr) => {
  if (typeof arr === 'undefined' || arr.length === 0)
    throw new Error('Invalid Input');
  // Here is the swap function from before.
  const swap = (i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  // Let's keep track of our relation.
  // This will be either '<' or '>' at any point in time.
  let relation = '<';

  // Now we iterate through our array.
  for (var i = 0; i <= arr.length - 2; i++) {
    // If the current relation doesn't match the relationship
    //   between arr[i] and arr[i+1], we do a swap.
    if (
      (relation === '<' && arr[i] > arr[i + 1]) ||
      (relation === '>' && arr[i] < arr[i + 1])
    ) {
      swap(i, i + 1);
    }
    // With every iteration, we change '<' to '>', and vice versa.
    relation = relation === '<' ? '>' : '<';
  }

  // Finally, we return our modified array.
  return arr;
};

console.log(zicZag([4, 3, 7, 8, 6, 2, 1])); // Output :- 3, 7, 4, 8, 2, 6, 1;
