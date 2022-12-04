// An alphanumeric ordering of strings is defined as follows: each string is considered as a sequence of tokens, where each token is a letter or a number (as opposed to an isolated digit, as is the case in lexicographic ordering). For example, the tokens of the string "ab01c004" are [a, b, 01, c, 004]. In order to compare two strings, we'll first break them down into tokens and then compare the corresponding pairs of tokens with each other (i.e. compare the first token of the first string with the first token of the second string, etc).
// Here is how tokens are compared:
// If a letter is compared with another letter, the usual alphabetical order applies.
// A number is always considered less than a letter.
// When two numbers are compared, their values are compared. Leading zeros, if any, are ignored.
// If at some point one string has no more tokens left while the other one still does, the one with fewer tokens is considered smaller.
// If the two strings s1 and s2 appear to be equal, consider the smallest index i such that tokens(s1)[i] and tokens(s2)[i] (where tokens(s)[i] is the ith token of string s) differ only by the number of leading zeros. If no such i exists, the strings are indeed equal. Otherwise, the string whose ith token has more leading zeros is considered smaller.

function solution(s1, s2) {
  const t1 = s1.match(/\d+|[a-zA-Z]/g);
  const t2 = s2.match(/\d+|[a-zA-Z]/g);
  const min = Math.min(t1.length, t2.length);
  let mark;

  for (let i = 0; i < min; i++) {
    const a = t1[i];
    const b = t2[i];

    if (isLetter(a) && isLetter(b)) {
      if (a !== b) {
        return a < b;
      }
    } else if (!isLetter(a) && !isLetter(b)) {
      let ss = compare(a, b);
      
      if (ss) {
        return ss === -1;
      } else {
        mark = mark == null ? a.length > b.length : mark;
      }
    } else if (isLetter(a) && !isLetter(b)) {
      return false;
    } else if (!isLetter(a) && isLetter(b)) {
      return true;
    }
  }

  if (t1.length != t2.length) {
    return t1.length < t2.length;
  }

  return mark || false;
}

function isLetter(a) {
  return /[a-zA-Z]/.test(a);
}

function compare(a, b) {
  a = a.padStart(20, "0");
  b = b.padStart(20, "0");

  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
      return -1;
    } else if (a[i] > b[i]) {
      return 1;
    }
  }

  return 0;
}
