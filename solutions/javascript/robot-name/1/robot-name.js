const usedNames = new Set();

const generateRandomName = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  
  let name = '';
  for (let i = 0; i < 2; i++) {
    name += letters[Math.floor(Math.random() * letters.length)];
  }
  for (let i = 0; i < 3; i++) {
    name += digits[Math.floor(Math.random() * digits.length)];
  }
  return name;
};

export class Robot {
  #name;

  constructor() {
    this.reset();
  }

  get name() {
    return this.#name;
  }

  reset() {
    let newName;
    do {
      newName = generateRandomName();
    } while (usedNames.has(newName));

    usedNames.add(newName);
    this.#name = newName;
  }
}

Robot.releaseNames = () => {
  usedNames.clear();
};
