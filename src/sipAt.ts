/**
 * Finds the character in the input string at given index.
 *
 * @param str The input string.
 * @param index The input index.
 *
 * @returns The character at the given index, or `null` if either of inputs isn't a string.
 *
 * @example
 * ```typescript
 * sipAt("coffee", 2); // Returns "f"
 * sipAt(123, "a"); // Returns null
 * ```
 */
export function sipAt(str: string, index: number): string | null {
  if (typeof str !== "string" || typeof index !== "number") {
    return null;
  }

  let i = 0;

  while (str[i] !== undefined) {
    if (i === index) {
      return str[i];
    }
    i++;
  }
  return null;
}
