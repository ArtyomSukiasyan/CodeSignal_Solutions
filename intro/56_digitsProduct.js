// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

function solution(product) {
  for (let i = 1; i <= 9999; i++) {
    let cloneI = i;
    let productI = 1;

    while (cloneI) {
      let digit = cloneI % 10;
      productI *= digit;
      cloneI = Math.trunc(cloneI / 10);
    }

    if (productI === product) {
      return i;
    }
  }

  return -1;
}
