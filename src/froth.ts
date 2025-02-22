// Converts a string to uppercase
export function froth(str: string) {
  if (typeof str !== "string") {
    return null;
  }

  let i = 0;
  let result = "";

  while (str[i] !== undefined) {
    result += String.fromCharCode(
      str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123
        ? str.charCodeAt(i) - 32
        : str.charCodeAt(i)
    );
    i++;
  }
  return result;
}
