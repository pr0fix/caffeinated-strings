/**
 * Checks if word is within string.
 *
 * @param str The input string.
 * @param word The input word as string.
 *
 * @returns 
 * `true` if word is in string, 
 * `false` if not, 
 * or `null` if either of inputs isn't a string.
 *
 * @example
 * ```typescript
 * hasMilk("coffee tastes good with milk", "good"); // Returns true
 * hasMilk("coffee tastes good with milk", 2); // Returns null
 * ```
 */

export function hasMilk(str: string, word: string): boolean | null {
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
