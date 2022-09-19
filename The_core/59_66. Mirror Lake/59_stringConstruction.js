// Given two strings a and b, both consisting only of lowercase English letters, your task is to calculate how many strings equal to a can be constructed using only letters from the string b? Each letter can be used only once and in one string only.

function solution(a, b) {
  const ma = new Map();
  const mb = new Map();

  [...a].forEach((k) => ma.set(k, ~-ma.get(k)));
  [...b].forEach((k) => mb.set(k, ~-mb.get(k)));

  return (
    [...ma].reduce(
      (r, [k, c]) => Math.min(r, mb.has(k) && mb.get(k) / c),
      Infinity
    ) ^ 0
  );
}
