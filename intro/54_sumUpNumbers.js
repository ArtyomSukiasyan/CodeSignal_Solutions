// CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.
// Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

function solution(inputString) {
  let sum = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (Number(inputString[i])) {
      const str = inputString.slice(i);
      const num = parseInt(str);
      sum += Number(num);
      const len = num.toString().length;
      i += len;
    }
  }

  return sum;
}
