// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.

function solution(a, b) {
  const a1 = [];
  const b1 = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      a1.push(a[i]);
      b1.push(b[i]);
    }
  }

  if (a1.length === 2) {
    return a1[0] === b1[1] && a1[1] === b1[0];
  }

  if (a1.length === 0) {
    return true;
  }

  return false;
}
