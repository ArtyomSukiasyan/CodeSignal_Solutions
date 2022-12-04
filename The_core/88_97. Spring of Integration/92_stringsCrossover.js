// Define crossover operation over two equal-length strings A and B as follows:
// the result of that operation is a string of the same length as the input strings
// result[i] is either A[i] or B[i], chosen at random
// Given array of strings inputArray and a string result, find for how many pairs of strings from inputArray the result of the crossover operation over them may be equal to result.
// Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).

function solution(inputArray, result) {
  let pairs = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (possibleCrossover(inputArray[i], inputArray[j], result)) {
        pairs++;
      }
    }
  }

  return pairs;
}

function possibleCrossover(A, B, result) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== result[i] && B[i] !== result[i]) {
      return false;
    }
  }

  return true;
}
