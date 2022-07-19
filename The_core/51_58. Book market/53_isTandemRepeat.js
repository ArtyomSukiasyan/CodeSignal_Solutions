// Determine whether the given string can be obtained by one concatenation of some string to itself.

function solution(inputString) {
  return (
    inputString.slice(0, inputString.length / 2) ===
    inputString.slice(inputString.length / 2)
  );
}
