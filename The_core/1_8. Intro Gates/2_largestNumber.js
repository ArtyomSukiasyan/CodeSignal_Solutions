// Given an integer n, return the largest number that contains exactly n digits.

function solution(n) {
  let res = 0;

  for (let i = 0; i < n; i++) {
    res = res * 10 + 9;
  }

  return res;
}
