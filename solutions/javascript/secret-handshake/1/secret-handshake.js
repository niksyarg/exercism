export const commands = (number) => {
  const actions = [];

  if (number & 0b00001) actions.push('wink');
  if (number & 0b00010) actions.push('double blink');
  if (number & 0b00100) actions.push('close your eyes');
  if (number & 0b01000) actions.push('jump');

  if (number & 0b10000) actions.reverse();

  return actions;
};
