/*============ Soultion I =======================*/

let charCountI = (str) => {
  let result = {};
  if (typeof str === "undefined" || str == "" || str == null) {
    throw new Error("Whoops! Invalid String");
  }
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }

  return result;
};
console.log(charCountI("Hello world!!"));
/*============ Soultion II =======================*/
/*============ Refactoring and perfomance checking =======================*/
let charCountII = (str) => {
  let result = {};
  if (typeof str === "undefined" || str == "" || str == null) {
    throw new Error("Whoops! Invalid String");
  }
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
};
let isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // Uper Alpha (A-Z)
    !(code > 96 && code < 123) // lower Alpha (a-z)
  ) {
    return false;
  }
  return true;
};
console.log(charCountII("Hello world!!"));
