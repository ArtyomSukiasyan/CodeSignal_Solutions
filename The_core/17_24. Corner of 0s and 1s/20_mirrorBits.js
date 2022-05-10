// Reverse the order of the bits in a given integer.

function solution(a) {
  const reverseBinaryNum = a.toString(2).split("").reverse().join("");
  return parseInt(reverseBinaryNum, 2);
}
