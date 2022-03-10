// Given array of integers, remove each kth element from it.

function solution(inputArray, k) {
  const arr = [];
  let count = 1;

  for (let i = 0; i < inputArray.length; i++) {
    if (i + 1 === k * count) {
      count++;
      continue;
    }
    arr.push(inputArray[i]);
  }

  return arr;
}
