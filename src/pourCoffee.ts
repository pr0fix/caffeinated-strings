// Copies one string to another
export function pourCoffee(str: string) {
  let i = 0;
  let copy = "";

  while (str[i] !== undefined) {
    copy += str[i];
    i++;
  }

  return copy;
}
