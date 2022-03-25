// A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.
// Given a string, check whether it is beautiful.

function solution(inputString) {
  return (
    Object.values(
      inputString
        .split("")
        .sort()
        .reduce(
          (acc, val, idx, arr) => {
            if (val == arr[idx - 1]) {
              acc[val]++;
            } else {
              if (idx > 0 && val.charCodeAt() != arr[idx - 1].charCodeAt() + 1) {
                acc[String.fromCharCode(arr[idx - 1].charCodeAt() + 1)] = 0;
              }
              acc[val] = 1;
            }

            return acc;
          },
          { a: 0 }
        )
    ).filter((val, idx, arr) => val > arr[idx - 1]).length === 0
  );
}
