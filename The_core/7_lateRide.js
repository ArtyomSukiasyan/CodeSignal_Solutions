// One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.
// When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.
// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

function solution(n) {
  let hours = Math.floor(n / 60);
  let minutes = n % 60;

  let res = 0;

  while (hours) {
    res += hours % 10;
    hours = Math.trunc(hours / 10);
  }

  while (minutes) {
    res += minutes % 10;
    minutes = Math.trunc(minutes / 10);
  }

  return res;
}
