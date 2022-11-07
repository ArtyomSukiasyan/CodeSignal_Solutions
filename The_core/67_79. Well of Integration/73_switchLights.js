function solution(a) {
  let rightOn = a.reduce((acc, val) => acc + val, 0);

  return a.map((candle) => {
    rightOn -= candle;
    
    return rightOn % 2;
  });
}
