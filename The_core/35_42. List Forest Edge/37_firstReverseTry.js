// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.
// Given an array arr, swap its first and last elements and return the resulting array.

function solution(arr) {
  if (arr.length) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }

  return arr;
}
