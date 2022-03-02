// Given an array of strings, return another array containing all of its longest strings.

function solution(inputArray) {
  let maxlength = inputArray[0].length;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i].length > maxlength) {
      maxlength = inputArray[i].length;
    }
  }
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === maxlength) {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}
