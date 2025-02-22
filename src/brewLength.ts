// Returns the length of a string
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
