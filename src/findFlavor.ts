/**
 * Finds a substring inside a string.
 *
 * @param str The input string.
 * @param substr The input substring.
 *
 * @returns
 * The substring starting from the first match,
 * or `null` if either of inputs isn't a string.
 *
 * @example
 * ```typescript
 * findFlavor("cappuccino", "cc"); // Returns "ccuccino"
 * findFlavor(123, "a"); // Returns null
 * ```
 */
export function findFlavor(str: string, substr: string): string | null {
  if (typeof str !== "string" || typeof substr !== "string") {
    return null;
  }

  let i = 0;
  while (str[i] !== undefined) {
    if (str[i] === substr[0]) {
      let tempStrIndex = i;
      let tempSubIndex = 0;

      while (
        str[tempStrIndex] === substr[tempSubIndex] &&
        substr[tempSubIndex] !== undefined
      ) {
        tempStrIndex++;
        tempSubIndex++;
      }

      if (substr[tempSubIndex] === undefined) {
        let result = "";
        while (str[i] !== undefined) {
          result += str[i];
          i++;
        }
        return result;
      }
    }
    i++;
  }

  return null;
}
