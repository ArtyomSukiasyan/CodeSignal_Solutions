// Given the string, check if it is a palindrome.

function solution(inputString) {
  const lastIndex = inputString.length - 1;

  for (let i = 0; i < inputString.length / 2; i++) {
    if (inputString[i] !== inputString[lastIndex - i]) {
      return false;
    }
  }
  return true;
}
