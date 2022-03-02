// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

function solution(n) {
  let cloneNum = n;
  let digits = [];
  while (cloneNum) {
    let digit = cloneNum % 10;
    cloneNum = Math.trunc(cloneNum / 10);
    digits.push(digit);
  }

  let firstPart = 0;
  let secondPart = 0;

  for (let i = 0; i < digits.length / 2; i++) {
    firstPart += digits[i];
    secondPart += digits[digits.length - 1 - i];
  }

  return firstPart === secondPart;
}
