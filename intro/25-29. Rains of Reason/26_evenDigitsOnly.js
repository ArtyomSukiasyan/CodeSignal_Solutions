// Check if all digits of the given integer are even.

function solution(n) {
  let cloneN = n;
  while (cloneN) {
    let digit = cloneN % 10;
    if (digit % 2 === 1) {
      return false;
    }
    cloneN = Math.trunc(cloneN / 10);
  }
  return true;
}
