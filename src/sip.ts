/**
 * Removes whitespace from both ends of the input string.
 *
 * @param str The input string
 *
 * @returns A new string with whitespace removed without modifying the original string,
 * or `null` if the input is not a string or is empty.
 *
 * @example
 * ```typescript
 * sip("      coffee tastes good!     "); // Returns "coffee tastes good!"
 * sip(123); // Returns null
 * sip(""); // Returns null
 * ```
 */
export function sip(str: string): string | null {
  if (typeof str !== "string" || str === "") {
    return null;
  }

  let start = 0;

  while (
    str[start] === " " ||
    str[start] === "\t" ||
    str[start] === "\n" ||
    str[start] === "\r"
  ) {
    start++;
  }

  let end = 0;
  while (str[end] !== undefined) {
    end++;
  }

  end--;
  while (
    end >= start &&
    (str[end] === " " ||
      str[end] === "\t" ||
      str[end] === "\n" ||
      str[end] === "\r")
  ) {
    end--;
  }

  let result = "";
  for (let i = start; i <= end; i++) {
    result += str[i];
  }
  return result;
}
