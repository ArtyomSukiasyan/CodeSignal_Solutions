// You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.

function solution(s, t) {
  let cloneS = s.split("");

  for (let i = 0; i < t.length; i++) {
    const pos = cloneS.indexOf(t[i]);

    if (pos >= 0) {
      cloneS.splice(pos, 1);
    }
  }

  return cloneS.length;
}
