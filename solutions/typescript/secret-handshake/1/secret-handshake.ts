export function commands(n: number): string[] {
  const actions: string[] = [];

  if (n & 0b00001) actions.push('wink');
  if (n & 0b00010) actions.push('double blink');
  if (n & 0b00100) actions.push('close your eyes'); 
  if (n & 0b01000) actions.push('jump');

  if (n & 0b10000) {
    actions.reverse();
  }

  return actions;
}
