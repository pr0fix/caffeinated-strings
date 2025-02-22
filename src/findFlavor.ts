// Finds a substring inside a string
export function findFlavor(str: string, substr: string): string | null {
  if (typeof str !== "string" || typeof substr !== "string") {
    return null;
  }

  let i = 0;
  while (str[i] !== undefined) {
    if (str[i] === substr[0]) {
      let tempStrIndex = i;
      let tempSubIndex = 0;

      while (
        str[tempStrIndex] === substr[tempSubIndex] &&
        substr[tempSubIndex] !== undefined
      ) {
        tempStrIndex++;
        tempSubIndex++;
      }

      if (substr[tempSubIndex] === undefined) {
        let result = "";
        while (str[i] !== undefined) {
          result += str[i];
          i++;
        }
        return result;
      }
    }
    i++;
  }

  return null;
}