// Let's call two integers A and B friends if each integer from the array divisors is either a divisor of both A and B or neither A nor B. If two integers are friends, they are said to be in the same clan. How many clans are the integers from 1 to k, inclusive, broken into?

function solution(divisors, k) {
  let mySet = new Set();

  for (let i = 1; i <= k; i++) {
    let str = "";

    for (let j = 0; j < divisors.length; j++) {
      if (i % divisors[j] === 0) {
        str += "0";
      } else {
        str += "1";
      }
    }

    mySet.add(str);
    str = "";
  }

  return mySet.size;
}
