/**
 * Concatenates a string to another separated with delimiter.
 *
 * @param str1 The first input string.
 * @param str2 The seconds input string.
 * @param delimiter The delimiter to use in between input strings.
 *
 * @returns A string containing both input strings and delimiter in between, or `null` if either of inputs isn't a string.
 *
 * @example
 * ```typescript
 * addMilk("coffee tastes", "very good with milk", ", "); // Returns "coffee tastes, very good with milk"
 * addMilk(123); // Returns null
 * ```
 */
export function addMilk(
  str1: string,
  str2: string,
  delimiter: string
): string | null {
  if (
    typeof str1 !== "string" ||
    typeof str2 !== "string" ||
    typeof delimiter !== "string"
  ) {
    return null;
  }

  let i = 0;
  let j = 0;
  let result = "";

  while (str1[i] !== undefined) {
    result += str1[i];
    i++;
  }

  result += delimiter;

  while (str2[j] !== undefined) {
    result += str2[j];
    j++;
  }

  return result;
}
