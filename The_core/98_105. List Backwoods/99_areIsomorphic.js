// Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.
// Given two two-dimensional arrays, check if they are isomorphic.

function solution(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i].length !== array2[i].length) {
      return false;
    }
  }

  return true;
}
