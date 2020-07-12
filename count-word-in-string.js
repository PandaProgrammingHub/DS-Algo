let charCountI = (str) => {
  let result = {};
  if (typeof str === "undefined" || str == "" || str == null) {
    throw new Error("Whoops! Invalid String");
  }
  let words = str.split(" ");
  for (let word of words) {
    word = word.toLowerCase();
    if (result[word] > 0) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  return result;
};
console.log(charCountI("Hello world hello 123456"));
