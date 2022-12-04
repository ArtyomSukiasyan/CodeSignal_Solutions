// You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.

function solution(part, total) {
  const partSeconds = convertTimeToSeconds(part);
  const totalSeconds = convertTimeToSeconds(total);

  const mcd = gcd(partSeconds, totalSeconds);

  return [partSeconds / mcd, totalSeconds / mcd];
}

function convertTimeToSeconds(time) {
  const timeInArray = time.split(":");

  const hours = Number(timeInArray[0]);
  const minutes = Number(timeInArray[1]);
  const seconds = Number(timeInArray[2]);

  return hours * 3600 + minutes * 60 + seconds;
}

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}
