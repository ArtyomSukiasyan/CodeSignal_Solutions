// Given a string, find the number of different characters in it.

function solution(s) {
  let str = s.split("");
  let uniqueChars = new Set(str);

  return uniqueChars.size;
}
