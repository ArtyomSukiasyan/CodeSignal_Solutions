// John Doe likes solutions very much, and he was very happy to hear that his country's government decided to introduce yet another one. He heard that the new solution will be celebrated each year on the xth week of month, on weekDay.
// Your task is to return the day of month on which the solution will be celebrated in the year yearNumber.

function solution(x, weekDay, month, yearNumber) {
  const date = new Date();
  date.setTime(Date.parse(month + "-01-" + yearNumber));

  const initMonth = date.getMonth();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = 0;

  while (x > 0) {
    if (daysOfWeek[date.getDay()] === weekDay) {
      x--;

      if (date.getMonth() !== initMonth) {
        return -1;
      }
    }

    date.setDate(date.getDate() + 1);
    day++;
  }

  return day;
}
