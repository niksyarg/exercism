const NUMBER_WORDS = [
  'no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'
];

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const generateVerse = (count) => {
  const currentWord = capitalize(NUMBER_WORDS[count]);
  const nextWord = NUMBER_WORDS[count - 1];
  
  const currentPlural = count === 1 ? 'bottle' : 'bottles';
  const nextPlural = (count - 1) === 1 ? 'bottle' : 'bottles';

  return [
    `${currentWord} green ${currentPlural} hanging on the wall,`,
    `${currentWord} green ${currentPlural} hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be ${nextWord} green ${nextPlural} hanging on the wall.`
  ];
};

export const recite = (initialBottlesCount, takeDownCount) => {
  const result = [];

  for (let i = 0; i < takeDownCount; i++) {
    const currentCount = initialBottlesCount - i;
    
    // Добавляем пустую строку между куплетами
    if (i > 0) {
      result.push('');
    }
    
    result.push(...generateVerse(currentCount));
  }

  return result;
};
