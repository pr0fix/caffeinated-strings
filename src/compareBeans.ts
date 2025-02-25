/**
 * Compares two strings.
 *
 * @param str1 First input string.
 * @param str2 Second input string.
 * 
 * @returns
 * `0` if strings are identical,
 * `1` if `str1` is lexicographically greater,
 * `-1` if `str1` is lexicographically less.
 * Or `null` if either of inputs isn't a string.
 *
 * @example
 * ```typescript
 * compareBeans("cappuccino", "americano"); // Returns 1
 * compareBeans(0, "americano") // Returns null
 * ```
 */

export function compareBeans(str1: string, str2: string): number | null {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return null;
  }

  let i = 0;

  while (str1[i] !== undefined || str2[i] !== undefined) {
    if (str1[i] !== str2[i]) {
      if (str1.charCodeAt(i) > str2.charCodeAt(i)) {
        return 1;
      } else {
        return -1;
      }
    }
    i++;
  }
  return 0;
}
