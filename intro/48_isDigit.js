// Determine if the given character is a digit or not.

function solution(symbol) {
  return parseInt(symbol) || parseInt(symbol) === 0 ? true : false;
}
