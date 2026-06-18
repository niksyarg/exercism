const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white'
];

export function decodedResistorValue(colors: string[]): string {
  const [c1, c2, c3] = colors;

  const val1 = COLORS.indexOf(c1);
  const val2 = COLORS.indexOf(c2);
  const exponent = COLORS.indexOf(c3);

  let ohms = (val1 * 10 + val2) * Math.pow(10, exponent);

  if (ohms >= 1000000000) {
    return `${ohms / 1000000000} gigaohms`;
  }
  if (ohms >= 1000000) {
    return `${ohms / 1000000} megaohms`;
  }
  if (ohms >= 1000) {
    return `${ohms / 1000} kiloohms`;
  }

  return `${ohms} ohms`;
}


