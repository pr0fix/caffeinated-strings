/**
 * Constructs a new string which contains the specified number of copies of the input string.
 *
 * @param str The input string
 * @param count The input count
 *
 * @returns A string with specified number of copies of input string, concatenated together.
 *
 * @example
 * ```typescript
 * refillCup("coffee ", 2); // Returns "coffee coffee "
 * refillCup("coffee ", -1); // Returns null
 * refillCup("", 2); // Returns null
 * ```
 */
export function refillCup(str: string, count: number): string | null {
  if (typeof str !== "string" || typeof count !== "number" || count <= 0) {
    return null;
  }

  let isEmpty = true;

  for (const _ of str) {
    isEmpty = false;
    break;
  }

  if (isEmpty) {
    return null;
  }

  let result = "";

  while (count > 0) {
    result += str;
    count--;
  }

  return result;
}
