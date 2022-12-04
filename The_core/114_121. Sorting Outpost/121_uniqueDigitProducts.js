// Let's call product(x) the product of x's digits. Given an array of integers a, calculate product(x) for each x in a, and return the number of distinct results you get.

function solution(a) {
  const variants = {};

  for (let i = 0; i < a.length; i++) {
    const product = getDigitsProduct(a[i]);
    variants[product] = a[i];
  }

  return Object.values(variants).length;
}

function getDigitsProduct(num) {
  let product = 1;

  while (num) {
    let digit = num % 10;
    product *= digit;
    num = Math.trunc(num / 10);
  }

  return product;
}
