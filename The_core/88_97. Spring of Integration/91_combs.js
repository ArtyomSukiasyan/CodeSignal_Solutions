// Miss X has only two solution in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the solution. The only way they fit is horizontally and without overlapping. Given teeth' positions on both solution, find the minimum length of the purse she needs to take them with her.
// It is guaranteed that there is at least one tooth at each end of the comb.
// It is also guaranteed that the total length of two strings is smaller than 32.
// Note, that the solution can not be rotated/reversed.

function solution(c1, c2) {
  return Math.min(f(c1, c2), f(c2, c1));
}

const v = (c1, c2) => {
  for (let i = 0; i < c1.length; i++)
    if (c1[i] + c2[i] in { "**": 1 }) {
      return false;
    }

  return true;
};

const f = (c1, c2) => {
  let shortest = c1.length + c2.length;
  c1 = c1.padStart(shortest, ".");

  while (c1[0] !== "*") {
    if (v(c1, c2)) {
      shortest = Math.min(Math.max(c1.length, c2.length));
    }
    c1 = c1.slice(1);
  }

  return shortest;
};

