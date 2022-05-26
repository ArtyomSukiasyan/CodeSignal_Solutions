// We define the middle of the array arr as follows:
// if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
// if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
// An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not.

function solution(arr) {
  let middleIdx = Math.floor(arr.length / 2);
  let middleElem;

  if (arr.length % 2 === 1) {
    middleElem = arr[middleIdx];
  } else {
    middleElem = arr[middleIdx] + arr[middleIdx - 1];
  }

  return arr[0] === middleElem && arr[arr.length - 1] === middleElem;
}
