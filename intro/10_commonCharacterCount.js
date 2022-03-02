// Given two strings, find the number of common characters between them.

function solution(s1, s2) {
  let count = 0;
  let idxs = [];

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (idxs.includes(j)) {
        continue;
      }
      if (s1[i] === s2[j]) {
        count++;
        idxs.push(j);
        break;
      }
    }
  }

  return count;
}
