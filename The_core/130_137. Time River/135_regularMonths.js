// In an effort to be more innovative, your boss introduced a strange new tradition: the first day of every month you're allowed to work from home. You like this rule when the day falls on a Monday, because any excuse to skip rush hour traffic is great!
// You and your colleagues have started calling these months regular months. Since you're a fan of working from home, you decide to find out how far away the nearest regular month is, given that the currMonth has just started.
// For your convenience, here is a list of month lengths (from January to December, respectively):
// Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
// Please, note that in leap years February has 29 days.

function solution(currMonth) {
  const time = currMonth.split("-");
  const data = new Date(time[1], time[0] - 1, 1, 12, 00);

  for (let i = 0; i < 24; i++) {
    data.setMonth(data.getMonth() + 1);

    if (data.getDay() === 1) {
      let month = data.getMonth() + 1;

      if (month.toString().length < 2) {
        month = `0${month}`;
      }

      const fullYear = data.getFullYear();

      return `${month}-${fullYear}`;
    }
  }
}
