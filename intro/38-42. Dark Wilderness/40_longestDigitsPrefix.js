// Given a string, output its longest prefix which contains only digits.

function solution(inputString) {
  return inputString.match(/^\d*/)[0];
}
