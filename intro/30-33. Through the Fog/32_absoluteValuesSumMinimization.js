// Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:
// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// (where abs denotes the absolute value)
// If there are several possible answers, output the smallest one.

function solution(arr) {
  const res = [];
  arr.forEach((num) => {
    const sum = arr.reduce((accum, next) => {
      return accum + Math.abs(next - num);
    }, 0);
    res.push(sum);
  });
  const lowest = Math.min(...res);
  return arr[res.indexOf(lowest)];
}
