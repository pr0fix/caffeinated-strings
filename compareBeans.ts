// Compares two strings
export function compareBeans(str1: string, str2: string) {
  let i = 0;

  while (str1[i] !== undefined || str2[i] !== undefined) {
    if (str1[i] !== str2[i]) {
      if (str1.charCodeAt(i) > str2.charCodeAt(i)) {
        return ">0";
      } else {
        return "<0";
      }
    }
    i++;
  }
  return "0";
}
