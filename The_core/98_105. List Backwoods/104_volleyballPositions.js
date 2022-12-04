// You are watching a volleyball tournament, but you missed the beginning of the very first game of your favorite team. Now you're curious about how the coach arranged the players on the field at the start of the game.

function solution(formation, k) {
  const rotations = [
    [0, 1],
    [1, 0],
    [3, 0],
    [2, 1],
    [3, 2],
    [1, 2],
  ];

  const initial = formation.map((row) => row.slice());
  
  k = 6 - (k % 6);

  for (let i = 0; i < 6; i++) {
    initial[rotations[i][0]][rotations[i][1]] =
      formation[rotations[(i + k) % 6][0]][rotations[(i + k) % 6][1]];
  }

  return initial;
}
