// Consider the following ciphering algorithm:
// For each character replace it with its code.
// Concatenate all of the obtained numbers.
// Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.
// Note: here the character's code means its decimal ASCII code, the numerical representation of a character used by most modern programming languages.

function solution(cipher) {
  let res = "";
  let startChar = 0;

  for (let i = 1; i < cipher.length; i++) {
    const ascii = cipher.slice(startChar, i + 1);

    if (Number(ascii) > 96 && Number(ascii) < 123) {
      const char = String.fromCharCode(ascii);
      i++;
      startChar = i;
      res += char;
    }
  }

  return res;
}
