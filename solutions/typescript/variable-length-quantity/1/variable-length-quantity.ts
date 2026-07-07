export function encode(numbers: number[]): number[] {
  let result: number[] = [];

  for (let num of numbers) {
    const bytes: number[] = [];
    let n = num >>> 0;
    
    bytes.push(n & 0x7f); 
    n = n >>> 7;

    while (n > 0) {
      bytes.push((n & 0x7f) | 0x80);
      n = n >>> 7;
    }
    result.push(...bytes.reverse());
  }

  return result;
}

export function decode(bytes: number[]): number[] {
  let result: number[] = [];
  let currentNum = 0;
  let isComplete = false;

  for (let i = 0; i < bytes.length; i++) {
    const byte = bytes[i];

    if ((currentNum & 0xfe000000) !== 0) {
      throw new Error('Incomplete sequence');
    }

    currentNum = (currentNum << 7) | (byte & 0x7f);

    if ((byte & 0x80) === 0) {
      result.push(currentNum >>> 0);
      currentNum = 0;
      isComplete = true;
    } else {
      isComplete = false;
    }
  }

  if (!isComplete) {
    throw new Error('Incomplete sequence');
  }

  return result;
}
