// You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

function solution(a, b) {
  let sum = 0;

  for (let i = a; i <= b; i++) {
    const binaryNum = i.toString(2);
    let binarySum = 0;

    for (let j = 0; j < binaryNum.length; j++) {
      binarySum += Number(binaryNum[j]);
    }
    
    sum += binarySum;
  }

  return sum;
}
