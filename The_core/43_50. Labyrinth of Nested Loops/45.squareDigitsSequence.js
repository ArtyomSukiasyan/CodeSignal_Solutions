// Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.
// Given the first element a0, find the length of the sequence.

function solution(a0) {
  const nums = [a0];
  let newNum = 0;

  while (true) {
    const digit = a0 % 10;
    const squareDigit = digit ** 2;

    newNum += squareDigit;
    a0 = Math.trunc(a0 / 10);

    if (a0 === 0) {
      if (nums.includes(newNum)) {
        return nums.length + 1;
      }

      nums.push(newNum);
      a0 = newNum;
      newNum = 0;
    }
  }
}
