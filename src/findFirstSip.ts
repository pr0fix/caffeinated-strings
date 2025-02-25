/**
 * Finds the first occurrence of a character in a string.
 *
 * @param str The input string.
 * @param chr The character to look for as string.
 *
 * @returns
 * A substring from the first occurrence of the character to the end of the string,
 * or `null` if either of inputs isn't a string.
 *
 * @example
 * ```typescript
 * findFirstSip("macchiato", "c"); // Returns "cchiato"
 * findFirstSip(123, "a"); // Returns null
 * ```
 */
export function findFirstSip(str: string, chr: string): string | null {
  if (typeof str !== "string" || typeof chr !== "string") {
    return null;
  }

  let i = 0;
  let foundIndex = -1;

  while (str[i] !== undefined) {
    i++;
    if (str[i] === chr) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex === -1) {
    return null;
  }

  let result = "";
  let j = foundIndex;

  while (str[j] !== undefined) {
    result += str[j];
    j++;
  }

  return result;
}
