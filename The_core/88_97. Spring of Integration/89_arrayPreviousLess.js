// Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

function solution(items) {
  const res = [-1];

  for (let i = 1; i < items.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (items[j] < items[i]) {
        res.push(items[j]);
        break;
      }
    }

    if (res.length === i) {
      res.push(-1);
    }
  }

  return res;
}
