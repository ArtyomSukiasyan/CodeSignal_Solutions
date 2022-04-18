// Some phone usage rate may be described as follows:
// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.
// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

function solution(min1, min2_10, min11, s) {
  let res = 0;

  while (s > 0) {
    if (res < 1) {
      s -= min1;
      res++;
    } else if (res < 10) {
      s -= min2_10;
      res++;
    } else {
      s -= min11;
      res++;
    }
    
    if (s < 0) {
      return res - 1;
    }
  }

  return res;
}
