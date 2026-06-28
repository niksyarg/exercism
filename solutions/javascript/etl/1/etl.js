export const transform = (old) => {
  const newFormat = {};

  for (const [score, letters] of Object.entries(old)) {
    letters.forEach(letter => {
      newFormat[letter.toLowerCase()] = Number(score);
    });
  }

  return newFormat;
};
