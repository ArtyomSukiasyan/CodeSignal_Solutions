// Given a string, return its encoding defined as follows:
// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.

function solution(s) {
  const arr = [];
  let str = "";

  for (let i = 0; i < s.length; i++) {
    str += s[i];
    
    if (s[i] !== s[i + 1]) {
      arr.push(str);
      str = "";
    }
  }

  const nextArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 1) {
      nextArr[i] = arr[i];
    } else {
      nextArr[i] = arr[i].length + arr[i][0];
    }
  }

  return nextArr.join("");
}
