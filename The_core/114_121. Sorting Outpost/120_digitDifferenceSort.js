// Given an array of integers, sort its elements by the difference of their largest and smallest digits. In the case of a tie, that with the larger index in the array should come first.

function solution(a) {
  return a.sort((a, b) => {
    if (getDifference(a) - getDifference(b) > 0) {
      return 1;
    }

    return -1;
  });
}

function getDifference(num) {
  if (num < 10) {
    return 0;
  }

  let max = 0;
  let min = 10;

  while (num) {
    let digit = num % 10;

    if (digit > max) {
      max = digit;
    }

    if (digit < min) {
      min = digit;
    }

    num = Math.trunc(num / 10);
  }

  return max - min;
}
