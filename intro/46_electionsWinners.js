// Elections are in progress!
// Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.
// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

function solution(votes, k) {
  let max = Math.max(...votes);
  let count = 0;

  if (k === 0) {
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] === max) {
        count++;
      }
      if (count > 1) {
        return 0;
      }
    }
    return 1;
  }

  for (let i = 0; i < votes.length; i++) {
    if (votes[i] + k > max) {
      count++;
    }
  }

  return count;
}
