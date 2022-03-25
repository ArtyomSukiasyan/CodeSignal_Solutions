// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
  let maxProduct = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > maxProduct) {
      maxProduct = inputArray[i] * inputArray[i + 1];
    }
  }
  return maxProduct;
}
