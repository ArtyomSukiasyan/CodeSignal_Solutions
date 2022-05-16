// Given an integer n, find the minimal k such that
// k = m! (where m! = 1 * 2 * ... * m) for some integer m;
// k >= n.
// In other words, find the smallest factorial which is not less than n.

function solution(n) {
  let num = 1;

  for (let i = 2; i < n; i++) {
    num *= i;

    if (num >= n) {
      return num;
    }
  }
  
  return num;
}
