// Check if the given string is a correct time representation of the 24-hour clock.

function solution(time) {
  const [hours, minutes] = time.split(":");

  const isValidHours = hours >= 0 && hours < 24;
  const isValidMinutes = minutes > 0 && minutes < 60;

  return isValidHours && isValidMinutes;
}
