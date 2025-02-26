/**
 * Copies one string to another.
 *
 * @param str The input string
 *
 * @returns A copy of the input string, or `null` if the input is not a string.
 *
 * @example
 * ```typescript
 * pourCoffee("coffee"); // Returns "coffee"
 * pourCoffee(123); // Returns null
 * ```
 */
export function pourCoffee(str: string): string | null {
  if (typeof str !== "string") {
    return null;
  }

  let i = 0;
  let copy = "";

  while (str[i] !== undefined) {
    copy += str[i];
    i++;
  }

  return copy;
}
