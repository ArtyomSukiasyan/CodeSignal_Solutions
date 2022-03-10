// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

function solution(inputArray, k) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < inputArray.length - k + 1; i++) {
    for (let j = i; j < i + k; j++) {
      currentSum += inputArray[j];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    currentSum = 0;
  }

  return maxSum;
}
