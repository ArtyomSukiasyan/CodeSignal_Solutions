// You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the current page and numberOfDigits left. A page is considered numbered if it has the full number printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).
// It's guaranteed that you can number the current page, and that you can't number the last one in the book.

function solution(current, numberOfDigits) {
  let n;
  
  while (numberOfDigits > 0) {
    if (current >= 1000) {
      n = Math.floor(numberOfDigits / 4);
      numberOfDigits = 0;
      current += n;
    } else if (current >= 100) {
      n = Math.min(1000 - current, Math.floor(numberOfDigits / 3));
      current += n;
      numberOfDigits -= n * 3;

      if (numberOfDigits < 4) {
        numberOfDigits = 0;
      }
    } else if (current >= 10) {
      n = Math.min(100 - current, Math.floor(numberOfDigits / 2));
      current += n;
      numberOfDigits -= n * 2;

      if (numberOfDigits < 3) {
        numberOfDigits = 0;
      }
    } else {
      n = Math.min(10 - current, numberOfDigits);
      current += n;
      numberOfDigits -= n;
    }
  }

  return current - 1;
}
