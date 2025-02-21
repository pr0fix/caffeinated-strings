
// Finds the first occurrence of a character in a string
export function findFirstSip(str: string, chr: string) {
  let i = 0;
  let foundIndex = -1;

  while (str[i] !== undefined) {
    i++;
    if (str[i] === chr) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex === -1) {
    return null;
  }

  let result = "";
  let j = foundIndex;

  while (str[j] !== undefined) {
    result += str[j];
    j++;
  }

  return result;
}
