/**
 * Transforms the input string to uppercase.
 *
 * @param str The input string.
 *
 * @returns The input string in uppercase, or `null` if the input is not a string.
 *
 * @example
 * ```typescript
 * froth("espresso"); // Returns "ESPRESSO"
 * froth(123); // Returns null
 * ```
 */
export function froth(str: string): string | null {
  if (typeof str !== "string") {
    return null;
  }

  let i = 0;
  let result = "";

  while (str[i] !== undefined) {
    result += String.fromCharCode(
      (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) ||
        (str.charCodeAt(i) > 223 && str.charCodeAt(i) < 256)
        ? str.charCodeAt(i) - 32
        : str.charCodeAt(i)
    );
    i++;
  }
  return result;
}
