// A little child is studying arithmetic. They have just learned how to add two integers, written one below another, column by column. But the child always forgets about the important part - carrying.
// Given two integers, your task is to find the result that the child will get.
// Note: The child had learned from this site, so feel free to check it out too if you are not familiar with column addition.

function solution(param1, param2) {
  let res = 0;
  let count = 1;

  while (param1 || param2) {
    lastParam1 = param1 % 10;
    lastParam2 = param2 % 10;

    let sumParams = lastParam1 + lastParam2;
    let lastSumParams = sumParams % 10;

    res += count * lastSumParams;
    count *= 10;

    param1 = Math.trunc(param1 / 10);
    param2 = Math.trunc(param2 / 10);
  }

  return res;
}
