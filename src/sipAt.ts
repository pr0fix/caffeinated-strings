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
