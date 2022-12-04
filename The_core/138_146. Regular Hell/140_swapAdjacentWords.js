// You are given a string consisting of words separated by whitespace characters, where the words consist only of English letters. Your task is to swap pairs of consecutive words and return the result.

function solution(s) {
  return s.replace(/(\S+)\s(\S+)/g, `$2 $1`);
}
