// Remove a part of a given array between given 0-based indexes l and r (inclusive).

function solution(inputArray, l, r) {
  let elemCount = r - l + 1;
  inputArray.splice(l, elemCount);
  
  return inputArray;
}
