// Given an array of strings, return another array containing all of its longest strings.

function solution(inputArray) {
  const res = [];
  const longestStr = inputArray.reduce(
    (a, b) => (a.length > b.length ? a : b),
    ""
  );

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === longestStr.length) {
      res.push(inputArray[i]);
    }
  }

  return res;
}
