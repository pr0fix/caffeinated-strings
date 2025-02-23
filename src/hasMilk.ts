export function hasMilk(str: string, word: string) {
  if (typeof str !== "string" || typeof word !== "string") {
    return null;
  }

  let i = 0;
  let strLen = 0,
    wordLen = 0;

  while (str[strLen] !== undefined) strLen++;
  while (word[wordLen] !== undefined) wordLen++;

  if (strLen === 0 || wordLen === 0) {
    return null;
  }

  while (i <= strLen - wordLen) {
    let j = 0;
    while (j < wordLen && str[i + j] === word[j]) {
      j++;
    }

    if (j === wordLen) {
      return true;
    }

    i++;
  }
  return false;
}
