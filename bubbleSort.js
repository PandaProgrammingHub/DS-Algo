let bubbleSort = (arr) => {
  const swap = (arr, arInx1, arInx2) => {
    return ([arr[arInx1], arr[arInx2]] = [arr[arInx2], arr[arInx1]]);
  };
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};
console.log(bubbleSort([12, 4, 56, 64, 23, 34]));
