export function decodedValue(colors: string[]): number {
  const colorMap: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  const firstValue = colorMap[colors[0]];
  const secondValue = colorMap[colors[1]];

  return firstValue * 10 + secondValue;
}
