// Given a character, check if it represents an odd digit, an even digit or not a digit at all.

function solution(symbol) {
  if (isNaN(symbol)) {
    return "not a digit";
  }

  if (symbol % 2 === 1) {
    return "odd";
  }

  return "even";
}
