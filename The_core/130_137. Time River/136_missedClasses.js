// Your Math teacher takes education very seriously, and hates it when a class is missed or canceled for any reason. He even made up the following rule: if a class is missed because of a holiday, the teacher will compensate for it with a makeup class after school.
// You're given an array, daysOfTheWeek, with the weekdays on which your teacher's classes are scheduled, and holidays, representing the dates of the holidays throughout the academic year (from 1st of September in year to 31st of May in year + 1). How many times will you be forced to stay after school for a makeup class because of holiday conflicts in the current academic year?
// For your convenience, here is the list of month lengths (from January to December, respectively):
// Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
// Please note that in leap years February has 29 days.

function solution(year, daysOfTheWeek, holidays) {
  const date = new Date();
  daysOfTheWeek = daysOfTheWeek.map((d) => d % 7);
  let makeUpDays = 0;

  for (var i = 0; i < holidays.length; i++) {
    if (Number(holidays[i].split("-")[0]) >= 9) {
      date.setTime(Date.parse(holidays[i] + "-" + year));
    } else {
      date.setTime(Date.parse(holidays[i] + "-" + (year + 1)));
    }

    if (daysOfTheWeek.includes(date.getDay())) {
      makeUpDays++;
    }
  }

  return makeUpDays;
}
