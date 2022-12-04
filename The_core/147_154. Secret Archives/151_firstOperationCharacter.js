// Given a string which represents a valid arithmetic expression, find the index of the character in the given expression corresponding to the arithmetic operation which needs to be computed first.
// Note that several operations of the same type with equal priority are computed from left to right.
// See the explanation of the third example for more details about the operations priority in this problem.

function solution(expr) {
  const mulIn = expr.match(/\([^()]*\d+ *\* *\d+[^()]*\)/);

  if (mulIn) {
    return mulIn.index + mulIn[0].indexOf("*");
  }

  const sumIn = expr.match(/\([^()]*\d+ *\+ *\d+[^()]*\)/);

  if (sumIn) {
    return sumIn.index + sumIn[0].indexOf("+");
  }

  const mul = expr.match(/\d+ *\* *\d+/);

  if (mul) {
    return mul.index + mul[0].indexOf("*");
  }

  const sum = expr.match(/\d+ *\+ *\d+/);

  if (sum) {
    return sum.index + sum[0].indexOf("+");
  }
}
