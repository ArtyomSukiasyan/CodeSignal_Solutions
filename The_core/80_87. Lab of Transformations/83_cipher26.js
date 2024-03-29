// You've intercepted an encrypted message, and you are really curious about its contents. You were able to find out that the message initially contained only lowercase English letters, and was encrypted with the following cipher:
// Let all letters from 'a' to 'z' correspond to the numbers from 0 to 25, respectively.
// The number corresponding to the ith letter of the encrypted message is then equal to the sum of numbers corresponding to the first i letters of the initial unencrypted message modulo 26.
// Now that you know how the message was encrypted, implement the algorithm to decipher it.

function solution(message) {
  const charCodeForA = "a".charCodeAt(0);
  let sum = 0;
  let res = "";

  for (let i = 0; i < message.length; i++) {
    const nextChar = (message[i].charCodeAt(0) - charCodeForA + 26 - sum) % 26;
    res += String.fromCharCode(nextChar + charCodeForA);
    sum = (sum + nextChar) % 26;
  }

  return res;
}
