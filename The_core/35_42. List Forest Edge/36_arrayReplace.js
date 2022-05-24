// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

function solution(inputArray, elemToReplace, substitutionElem) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      inputArray[i] = substitutionElem;
    }
  }

  return inputArray;
}
