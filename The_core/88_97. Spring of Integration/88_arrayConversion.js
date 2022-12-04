// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:
// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
// After the algorithm has finished, there will be a single element left in the array. Return that element.

function solution(inputArray) {
  let count = 1;
  let res = [];

  for (let i = 0; i < inputArray.length; i += 2) {
    if (inputArray.length === 1) {
      return inputArray[0];
    }

    if (count % 2 === 1) {
      const elem = inputArray[i] + inputArray[i + 1];
      res.push(elem);
    } else {
      const elem = inputArray[i] * inputArray[i + 1];
      res.push(elem);
    }

    if (i + 2 >= inputArray.length) {
      count++;
      inputArray = res;
      i = -2;
      res = [];
    }
  }
}
