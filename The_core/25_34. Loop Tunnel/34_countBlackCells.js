// Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:
// A cell is painted black if it has at least one point in common with the diagonal;
// Otherwise, a cell is painted white.
// Count the number of cells painted black.

function solution(n, m) {
  if (n > m) {
    [n, m] = [m, n];
  }

  let s = 0;
  let r = 0;
  let t = 0;

  const maxValue = n / gcd(m, n);

  for (let i = 0; i < maxValue; i++) {
    t = m / n + r;
    s += Math.ceil(t);
    r = (t - 0.000001) % 1;
  }

  return gcd(m, n) * s + (gcd(m, n) - 1) * 2;
}

function gcd(m, n) {
  if (!n) {
    return m;
  }
  
  return gcd(n, m % n);
}
