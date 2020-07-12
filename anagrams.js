/**
 *
 * @param {*} str1
 * @param {*} str2
 * ("aaa", "AAA") => true
 * ("aasas","sasas") => false
 */

let validAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let frequncyCounter1 = {};
  let frequncyCounter2 = {};
  for (let char of str1) {
    char = char.toLowerCase();
    frequncyCounter1[char] = ++frequncyCounter1[char] || 1;
  }
  for (let char of str2) {
    char = char.toLowerCase();
    frequncyCounter2[char] = ++frequncyCounter2[char] || 1;
  }
  console.log("frequncyCounter1: ", frequncyCounter1);
  console.log("frequncyCounter2: ", frequncyCounter2);
  for (let key in frequncyCounter1) {
    if (frequncyCounter1[key] !== frequncyCounter2[key]) {
      return false;
    }
  }
  return true;
};
console.log(validAnagrams("", ""));
