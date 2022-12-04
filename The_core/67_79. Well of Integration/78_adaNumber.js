// Consider two following representations of a non-negative integer:
// A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
// An integer with at least one digit in a base from 2 to 16 (inclusive), enclosed between # characters, and preceded by the base, which can only be a number between 2 and 16 in the first representation. For digits from 10 to 15 characters a, b, ..., f and A, B, ..., F are used.
// Additionally, both representations may contain underscore (_) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.
// Your task is to determine whether the given string is a valid integer representation.
// Note: this is how integer numbers are represented in the programming language Ada.

function solution(line) {
  line = line.replace(/_/g, "");
  const digitsRegex = /^\d+$/;

  if (line.match(digitsRegex)) {
    return true;
  }

  const isHex = /^(\d{1,2})#([0-9a-f]+)#$/i;

  const num = line.match(isHex);

  if (num) {
    const isValidLength = num[1] >= 2 && num[1] <= 16;
    const isEveryValid = [...num[2]].every((v) => !isNaN(parseInt(v, num[1])));

    if (isValidLength && isEveryValid) {
      return true;
    }
  }

  return false;
}
