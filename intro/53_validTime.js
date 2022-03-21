// Check if the given string is a correct time representation of the 24-hour clock.

function solution(time) {
  const arr = time.split(":");

  if (arr[0] >= 24 || arr[0] < 0) {
    return false;
  }

  if (arr[1] > 59 || arr[1] < 0) {
    return false;
  }

  return true;
}
