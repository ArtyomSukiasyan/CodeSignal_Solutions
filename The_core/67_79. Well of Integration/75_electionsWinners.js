function solution(votes, k) {
  let count = 0;
  const maxVotes = Math.max(...votes);
  const numOfMaxVotes = votes.filter((el) => el === maxVotes).length;
  const hasOneMaxVote = numOfMaxVotes === 1;

  for (let i = 0; i < votes.length; i++) {
    if ((votes[i] === maxVotes && hasOneMaxVote) || votes[i] + k > maxVotes) {
      count++;
    }
  }

  return count;
}
