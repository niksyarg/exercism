export const toRoman = (num: number): string => {
  const map: { [key: number]: string } = {
    1000: 'M', 900: 'CM', 500: 'D', 400: 'CD',
    100: 'C', 90: 'XC', 50: 'L', 40: 'XL',
    10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'
  };

  let result = '';
  const values = Object.keys(map).map(Number).sort((a, b) => b - a);

  for (const value of values) {
    while (num >= value) {
      result += map[value];
      num -= value;
    }
  }

  return result;
};
