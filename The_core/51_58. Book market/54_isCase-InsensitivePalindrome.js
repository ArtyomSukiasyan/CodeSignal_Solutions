// Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

function solution(inputString) {
  const middle = inputString.length / 2;
  const lowerCasedInputString = inputString.toLowerCase();

  for (let i = 0; i < middle; i++) {
    const isFirstEqualLast =
      lowerCasedInputString[i] ===
      lowerCasedInputString[lowerCasedInputString.length - 1 - i];

    if (isFirstEqualLast) {
      continue;
    }

    return false;
  }

  return true;
}
