// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

function solution(n) {
  const digits = [];
  let cloneNum = n;

  while (cloneNum) {
    let digit = cloneNum % 10;
    digits.push(digit);
    cloneNum = Math.trunc(cloneNum / 10);
  }

  let max = -Infinity;
  let j = 0;

  while (j < digits.length) {
    const currentSum = calcSum(digits, j);
    if (currentSum > max) {
      max = currentSum;
    }
    j++;
  }

  return max;
}

function calcSum(digits, j) {
  let currentSum = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === j) {
      continue;
    }
    currentSum = currentSum * 10 + digits[i];
  }

  return currentSum;
}
