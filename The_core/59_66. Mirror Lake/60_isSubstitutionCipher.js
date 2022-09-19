// A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.
// A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.
// Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.

function solution(string1, string2) {
  let ret = string1.length === string2.length;
  let t = 2;

  while (t) {
    for (let i = 0; i < string1.length; i++) {
      let pos = string1.indexOf(string1[i], i + 1);

      while (pos >= 0) {
        if (string2[pos] !== string2[i]) {
          ret = false;
        }

        pos = string1.indexOf(string1[i], pos + 1);
      }
    }

    [string1, string2] = [string2, string1];

    t--;
  }

  return ret;
}
