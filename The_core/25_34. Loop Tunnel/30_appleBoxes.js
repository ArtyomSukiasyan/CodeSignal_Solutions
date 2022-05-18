// You have k apple boxes full of apples. Each square box of size m contains m × m apples. You just noticed two interesting properties about the boxes:
// The smallest box is size 1, the next one is size 2,..., all the way up to size k.
// Boxes that have an odd size contain only yellow apples. Boxes that have an even size contain only red apples.
// Your task is to calculate the difference between the number of red apples and the number of yellow apples.

function solution(k) {
  let odds = 0;
  let evens = 0;

  for (let i = 2; i <= k; i += 2) {
    odds += i * i;
  }

  for (let i = 1; i <= k; i += 2) {
    evens += i * i;
  }

  return odds - evens;
}
