/**
 * Calculates the length of a string.
 *
 * @param str The input string.
 * 
 * @returns The length of the string, or `null` if the input is not a string.
 *
 * @example
 * ```typescript
 * brewLength("coffee"); // Returns 6
 * brewLength(123); // Returns null
 * ```
 */
export function brewLength(str: string): number | null {
  if (typeof str !== "string") {
    return null;
  }

  let i = 0;
  let count = 0;

  while (str[i] !== undefined) {
    i++;
    count++;
  }

  return count;
}
