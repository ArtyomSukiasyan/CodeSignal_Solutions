// In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.
// Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2.

function solution(score1, score2) {
    const isBigNums = score1 > 7 || score2 > 7;
    const isSmallNums = score1 < 6 && score2 < 6;
    const isNegativeNums = score1 < 0 || score2 < 0;

    if (isBigNums || isSmallNums || isNegativeNums) {
        return false;
    }

    if (score1 === 6 && score2 === 6) {
        return false;
    }

    if (score1 === 6 && score2 !== 5) {
        return true;
    }

    if (score2 === 6 && score1 !== 5) {
        return true;
    }

    if (score1 === 7 && score2 === 5) {
        return true;
    }

    if (score2 === 7 && score1 === 5) {
        return true;
    }

    if (score1 === 7 && score2 === 6) {
        return true;
    }

    if (score2 === 7 && score1 === 6) {
        return true;
    }

    return false;
}
