// Some people run along a straight line in the same direction. They start simultaneously at pairwise distinct positions and run with constant speed (which may differ from person to person).
// If two or more people are at the same point at some moment we call that a meeting. The number of people gathered at the same point is called meeting cardinality.
// For the given starting positions and speeds of runners find the maximum meeting cardinality assuming that people run infinitely long. If there will be no meetings, return -1 instead.

function solution(startPosition, speed) {
  let meetings = 1;

  for (let i = 0; i < startPosition.length; i++) {
    for (let j = i + 1; j < startPosition.length; j++) {
      const distDiff = startPosition[j] - startPosition[i];
      const speedDiff = speed[i] - speed[j];
      let count = 0;

      if (speedDiff === 0 && distDiff !== 0) {
        continue;
      }

      for (let k = 0; k < startPosition.length; k++) {
        const firstMenDist = startPosition[k] * speedDiff + speed[k] * distDiff;
        const secondMenDist =
          startPosition[i] * speedDiff + speed[i] * distDiff;

        if (firstMenDist === secondMenDist) {
          count++;
        }
      }

      if (count === 0) {
        continue;
      }

      if (count > meetings) {
        meetings = count;
      }
    }
  }

  if (meetings < 2) {
    meetings = -1;
  }

  return meetings;
}
