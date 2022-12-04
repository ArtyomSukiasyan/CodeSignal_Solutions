// Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.
// Define a string reflection as the result of applying the alphabet reflection to each of its characters.
// Reflect the given string.

function solution(inputString) {
  let res = "";

  for (let i = 0; i < inputString.length; i++) {
    const newCharCode =
      "z".charCodeAt(0) - inputString[i].charCodeAt(0) + "a".charCodeAt(0);
    const newChar = String.fromCharCode(newCharCode);
    res += newChar;
  }

  return res;
}
