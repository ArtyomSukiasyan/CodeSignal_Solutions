// Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.
// Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

function isNext(str1, str2) {
  let diff = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) diff++;
  }
  return diff === 1;
}

function arranged(arr) {
  let chars = true;
  for (let i = 0; i + 1 < arr.length && chars; i++) {
    if (!isNext(arr[i], arr[i + 1])) chars = false;
  }
  return chars;
}

function findNext(str, arr) {
  let idx = -1;
  for (let i = 0; i < arr.length && idx === -1; i++) {
    if (isNext(str, arr[i])) idx = i;
  }
  return idx;
}

function solution(inputArray) {
  let next = 0;
  inputArray.sort();

  for (
    let i = 0;
    i < inputArray.length && next >= 0 && !arranged(inputArray);
    i++
  ) {
    next = findNext(inputArray[i], inputArray);
    if (next >= 0 && (next > i + 1 || next < i - 1)) {
      inputArray.splice(i + 1, 0, inputArray[next]);
      if (next < i + 1) {
        inputArray.splice(next, 1);
      } else {
        inputArray.splice(next + 1, 1);
      }
    }
  }
  return arranged(inputArray);
}
