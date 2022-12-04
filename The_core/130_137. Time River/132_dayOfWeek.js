// Whenever you decide to celebrate your birthday you always do this your favorite café, which is quite popular and as such usually very crowded. This year you got lucky: when you and your friend enter the café you're surprised to see that it's almost empty. The waiter lets slip that there are always very few people on this day of the week.
// You enjoyed having the café all to yourself, and are now curious about the next time you'll be this lucky. Given the current birthdayDate, determine the number of years until it will fall on the same day of the week.
// For your convenience, here is the list of months lengths (from January to December, respectively):
// Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
// Please, note that in leap years February has 29 days. If your birthday is on the 29th of February, you celebrate it once in four years. Otherwise you birthday is celebrated each year.

function solution(birthdayDate) {
  const birthDay = new Date(birthdayDate);
  const date = birthDay.getDay();
  const day = birthDay.getDate();
  const month = birthDay.getMonth();
  let nextYear = birthDay.getFullYear() + 1;

  let newDay = new Date(nextYear, month, day).getDay();
  let newDate = new Date(nextYear, month, day).getDate();
  let i = 1;

  while (date !== newDay || newDate !== day) {
    nextYear++;
    i++;
    newDay = new Date(nextYear, month, day).getDay();
    newDate = new Date(nextYear, month, day).getDate();
  }

  return i;
}
