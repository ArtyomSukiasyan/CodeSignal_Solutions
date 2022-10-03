// You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins, but you are trying to use as few coins as possible.
// The coin values available in Bananaland are stored in a sorted array coins. coins[0] = 1, and for each i (0 < i < coins.length) coins[i] is divisible by coins[i - 1]. Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's price.

function solution(coins, price) {
  let count = 0;
  let currentCoin = coins.length - 1;

  while (price) {
    if (price - coins[currentCoin] >= 0) {
      count++;
      price -= coins[currentCoin];
    } else {
      currentCoin--;
    }
  }

  return count;
}
