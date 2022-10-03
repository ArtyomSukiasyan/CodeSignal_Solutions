// Check whether the given string is a subsequence of the plaintext alphabet.

function solution(s) {
  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) <= s.charCodeAt(i - 1)) return false;
  }

  return true;
}
