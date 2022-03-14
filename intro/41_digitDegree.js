// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.
// Given an integer, find its digit degree.

function solution(n) {
  let count = 0;

  while (n > 9) {
    n = calcSumOfDigits(n);
    count++;
  }

  return count;
}

function calcSumOfDigits(num) {
  let sum = 0;
  
  while (num) {
    sum += num % 10;
    num = (num - (num % 10)) / 10;
  }

  return sum;
}
