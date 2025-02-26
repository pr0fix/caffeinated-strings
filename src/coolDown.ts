export function coolDown(str: string): string | null {
  if (typeof str !== "string") {
    return null;
  }

  let i = 0;
  let result = "";

  while (str[i] !== undefined) {
    result += String.fromCharCode(
      (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) ||
        (str.charCodeAt(i) > 191 && str.charCodeAt(i) < 224)
        ? str.charCodeAt(i) + 32
        : str.charCodeAt(i)
    );
    i++;
  }

  return result;
}
