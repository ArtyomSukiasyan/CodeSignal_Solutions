// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

function solution(inputArray) {
  let max = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 1; i < inputArray.length - 1; i++) {
    if (Math.abs(inputArray[i] - inputArray[i + 1]) > max) {
      max = Math.abs(inputArray[i] - inputArray[i + 1]);
    }
  }

  return max;
}
