// You are given a two-digit integer n. Return the sum of its digits.

function solution(n) {
  const a = Math.trunc(n / 10);
  const b = n % 10;

  return a + b;
}
