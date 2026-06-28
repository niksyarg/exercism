const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white'
];

export const decodedValue = ([color1, color2]) => {
  return COLORS.indexOf(color1) * 10 + COLORS.indexOf(color2);
};
