// Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

function solution(n, l, r) {
  if (2 * r < n || 2 * l > n) {
    return 0;
  }
  
  const min = Math.max(l, n - r);
  const max = Math.min(r, n - l);
  const mid = Math.floor((max + min) / 2);

  return mid - min + 1;
}
