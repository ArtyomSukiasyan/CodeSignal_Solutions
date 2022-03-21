// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

function solution(text) {
  let result = "";
  let str = "";
  const reg = /[a-zA-Z]/;

  for (let i = 0; i < text.length; i++) {
    if (reg.test(text[i])) {
      str += text[i];
    } else {
      if (str.length > result.length) {
        result = str;
        str = "";
      } else {
        str = "";
      }
    }
  }

  if (str.length > result.length) {
    result = str;
  }
  return result;
}
