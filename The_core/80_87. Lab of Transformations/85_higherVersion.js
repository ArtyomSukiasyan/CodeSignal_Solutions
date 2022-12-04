// Given two version strings composed of several non-negative decimal fields separated by periods ("."), both strings contain equal number of numeric fields. Return true if the first version is higher than the second version and false otherwise.

function solution(ver1, ver2) {
  const ver1Arr = ver1.split(".");
  const ver2Arr = ver2.split(".");

  for (let i = 0; i < ver1Arr.length; i++) {
    const numberVer1 = Number(ver1Arr[i]);
    const numberVer2 = Number(ver2Arr[i]);

    if (numberVer1 > numberVer2) {
      return true;
    }

    if (numberVer1 < numberVer2) {
      return false;
    }
  }

  return false;
}
