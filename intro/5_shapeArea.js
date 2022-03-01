// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

function solution(n) {
  let maxLength = 2 * n - 1;
  let result = maxLength;
  for (let i = maxLength - 2; i > 0; i = i - 2) {
    result += i * 2;
  }
  return result;
}
