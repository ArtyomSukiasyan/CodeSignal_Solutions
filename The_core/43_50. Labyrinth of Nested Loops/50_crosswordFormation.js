// You're a crossword fanatic, and have finally decided to try and create your own. However, you also love symmetry and good design, so you come up with a set of rules they should follow:
// the crossword must contain exactly four words;
// these four words should form four pairwise intersections;
// all words must be written either left-to-right or top-to-bottom;
// the area of the rectangle formed by empty cells inside the intersections isn't equal to zero.
// Given 4 words, find the number of ways to make a crossword following the above-described rules. Note that two crosswords which differ by rotation are considered different.

function solution(words) {
  const permutations = permute(words);

  return permutations.reduce((acc, val) => acc + countSolutions(val), 0);
}

function countSolutions(words) {
  let count = 0;

  for (let i = 0; i < words[0].length; i++) {
    let j = words[1].indexOf(words[0][i]);

    while (j >= 0) {
      for (let k = i + 2; k < words[0].length; k++) {
        let l = words[2].indexOf(words[0][k]);

        while (l >= 0) {
          for (let m = j + 2; m < words[1].length; m++) {
            let n = words[3].indexOf(words[1][m]);

            while (n >= 0) {
              if (
                words[3].length - n > k - i &&
                words[2].length - l > m - j &&
                words[3][k - i + n] == words[2][m - j + l]
              ) {
                count++;
              }

              n = words[3].indexOf(words[1][m], n + 1);
            }
          }

          l = words[2].indexOf(words[0][k], l + 1);
        }
      }

      j = words[1].indexOf(words[0][i], j + 1);
    }
  }

  return count;
}

function permute(input) {
  const permArr = [];
  const usedWords = [];
  let word;

  for (let i = 0; i < input.length; i++) {
    word = input.splice(i, 1)[0];
    usedWords.push(word);

    if (input.length == 0) {
      permArr.push(usedWords.slice());
    }

    permute(input);
    input.splice(i, 0, word);
    usedWords.pop();
  }

  return permArr;
}
