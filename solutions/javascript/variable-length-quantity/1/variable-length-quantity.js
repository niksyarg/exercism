export const encode = (numbers) => {
  const result = [];

  for (let num of numbers) {
    const bytes = [];
    let n = num >>> 0; 


    do {
      bytes.push(n & 0x7f);
      n = n >>> 7;
    } while (n > 0);

    for (let i = 1; i < bytes.length; i++) {
      bytes[i] |= 0x80;
    }


    result.push(...bytes.reverse());
  }

  return result;
};

export const decode = (bytes) => {
  const result = [];
  let currentValue = 0;
  let incomplete = true;

  for (const byte of bytes) {

    currentValue = ((currentValue << 7) >>> 0) | (byte & 0x7f);


    if ((byte & 0x80) === 0) {
      result.push(currentValue >>> 0);
      currentValue = 0;
      incomplete = false;
    } else {
      incomplete = true;
    }
  }

  if (incomplete) {
    throw new Error('Incomplete sequence');
  }

  return result;
};