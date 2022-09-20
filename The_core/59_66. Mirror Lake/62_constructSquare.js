// Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string's characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.
// If there is no solution, return -1.

function solution(s) {
  const min = Number(
    "1" +
      Array(Math.floor((s.length - 1) / 2))
        .fill(0)
        .join("")
  );

  const max = Number(
    Array(Math.ceil(s.length / 2))
      .fill(9)
      .join("")
  );

  const digitsCount = getDigitsCount(s);

  for (let i = max + 1; i >= min - 1; i--) {
    if (getDigitsCount(String(i * i)) === digitsCount) {
      return i * i;
    }
  }

  return -1;
}
function getDigitsCount(str) {
  const digits = [];

  while (str.length) {
    digits.push(
      str.length - (str = str.replace(new RegExp(str[0], "g"), "")).length
    );
  }

  return digits.sort((a, b) => b - a).join("");
}
