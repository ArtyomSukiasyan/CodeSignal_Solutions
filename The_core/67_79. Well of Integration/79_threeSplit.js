// You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?
// It is guaranteed that the sum of all elements in the array is divisible by 3.

function solution(a) {
  const totalSum = a.reduce((acc, val) => acc + val, 0);
  let firstSum = 0;
  let secondSum = 0;
  let count = 0;

  for (let i = 0; i < a.length - 2; i++) {
    firstSum += a[i];
    secondSum = 0;

    for (let j = i + 1; j < a.length - 1; j++) {
      secondSum += a[j];

      if (
        firstSum === secondSum &&
        secondSum === totalSum - firstSum - secondSum
      ) {
        count++;
      }
    }
  }

  return count;
}
