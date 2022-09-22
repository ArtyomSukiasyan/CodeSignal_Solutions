// A step(x) operation works like this: it changes a number x into x - s(x), where s(x) is the sum of x's digits. You like applying functions to numbers, so given the number n, you decide to build a decreasing sequence of numbers: n, step(n), step(step(n)), etc., with 0 as the last element.
// Building a single sequence isn't enough for you, so you replace all elements of the sequence with the sums of their digits (s(x)). Now you're curious as to which number appears in the new sequence most often. If there are several answers, return the maximal one.

function solution(n) {
  const sumDigits = {};

  while (n) {
    let cloneN = n;
    let sum = 0;

    while (cloneN) {
      const digit = cloneN % 10;
      sum += digit;
      cloneN = Math.trunc(cloneN / 10);
    }

    if (sumDigits[sum]) {
      sumDigits[sum] = sumDigits[sum] + 1;
    } else {
      sumDigits[sum] = 1;
    }
    
    n = n - sum;
  }

  const keys = Object.keys(sumDigits);

  if (sumDigits[keys[0]] === sumDigits[keys[1]]) {
    return Math.max(...keys);
  }

  const values = Object.values(sumDigits);
  const maxValue = Math.max(...values);
  const res = keys.find((key) => sumDigits[key] === maxValue);

  return Number(res);
}
